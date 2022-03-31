import React from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  onClick: () => any;
  children: React.ReactNode;
  loading?: boolean;
};

const Button = ({ onClick, children, loading = false }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {loading ? "Загрузка..." : children}
    </button>
  );
};

export default Button;
