import React from "react";
import { Lab } from "../interfaces/labs.model";

import styles from "@/styles/components/card.module.css";

const Card = ({ data: { title, image } }: { data: Lab }) => {
  console.log(image);

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.card__img} />
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Card;
