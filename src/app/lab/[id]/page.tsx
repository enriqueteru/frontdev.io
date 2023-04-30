import { Lab, ResponseError } from "@/app/interfaces/labs.model";
import React from "react";

const getData = (id: string): any => {
  return fetch(`https://frontdev.io/cms/wp-json/wp/v2/lab/${id}?_embed=`, {
    cache: "no-cache",
  }).then((res) => res.json());
};

const page = async ({ params }: any) => {
  const { id } = params;
  let lab: any;
  let error: ResponseError;

  const response = await getData(id);

  if (!response.code) {
    lab = response;
  }

  if (response.code) {
    error = response;
  }

  return (
    <>
      <div>{lab ? lab.status : error!.message}</div>
    </>
  );
};

export default page;
