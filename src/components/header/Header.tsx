import React from "react";

import styles from "./styles.module.scss";

type HeaderProps = {
  title?: string;
};

function Header({ title = "My Catalog" }: HeaderProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarHeader}>
        <h1 className={styles.navbarBrand}>{title}</h1>
      </div>
    </nav>
  );
}

export default Header;
