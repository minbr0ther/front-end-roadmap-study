import styles from "./search_header.module.css";

import React from "react";

const SearchHeader = (props) => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.img} src="/images/logo.png" alt="" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input className={styles.input} type="search" placeholder="search..." />
      <button className={styles.button} type="submit">
        <img src="/images/search.png" alt="search" />
      </button>
    </header>
  );
};

export default SearchHeader;
