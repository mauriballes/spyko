import React from "react";

import Header from "../header/Header";

import styles from "./styles.module.scss";

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
    </>
  );
}

export default Container;
