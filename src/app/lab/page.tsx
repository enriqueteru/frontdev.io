import React from "react";
import { Lab } from "../interfaces/labs.model";
import Card from "../components/card";

import { handlerAPiEmbeddedProps } from "../helpers/wordpress-api-handlers/handlerEmbeddedData";
import styles from '@/styles/components/card.module.css'

const getData = () => {
  return fetch("https://frontdev.io/cms/wp-json/wp/v2/lab?_embed=", {
    cache: "no-cache",
  }).then((res) => res.json());
};

const Lab = async () => {
  let data: any;
  let posts: Lab[] = [];
  try {
   data = await getData();
   posts = data.map((post: any) => {
      const { categories, tags, image } = handlerAPiEmbeddedProps(
        post._embedded
      );
      
      return {
        id: post.id,
        title: post.title.rendered,
        name: post.acf.name,
        description: post.acf.description,
        content: post.content.rendered,
        tags,
        categories,
        createdAt: post.date,
        updatedAt: post.modified,
        image,
        repo: post.acf.repo,
        deploy: post.acf.deploy,
      };
    });
  } catch (error) {
    posts = [] as Lab[];
  }

  return (
    <>
      {posts.length > 0 ? (
        <div className={styles.cards__wrapper}>
          {posts.map((post: Lab, index: number) => (
            <Card data={post} key={index} />
          ))}
        </div>
      ) : (
        <div>No hay LABS disponibles</div>
      )}
    </>
  );
};

export default Lab;
