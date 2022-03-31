import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerHeading}>Тестовое задание</h1>
      <nav className={[styles.nav, styles.headerNav].join(" ") as string}>
        <ul className={styles.navList}>
          <li>
            <a className={styles.navLink} href="tel.:+79958860322">
              +7 (995) 886-03-22
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="mailto:jeuub.bodur@gmail.com">
              jeuub.bodur@gmail.com
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
