import React from "react";
import styles from "@/styles/components/shared/header.module.css";

const Header = ({ title }: { title: string }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}> {title} </h1>
    </div>
  );
};

export default Header;
