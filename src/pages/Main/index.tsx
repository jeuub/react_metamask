import React from "react";
import styles from "./main.module.scss";
import Button from "../../components/Button";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.connectWrapper}>
        <Button
          onClick={() => {
            console.log("asd");
          }}
        >
          Подключить metamask
        </Button>
      </div>
    </main>
  );
};

export default MainPage;
