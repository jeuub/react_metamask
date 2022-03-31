import React from "react";
import styles from "./main.module.scss";
import Button from "../../components/Button";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { requestAccounts } from "../../store/actionCreators";
import { AuthSlice } from "../../store/Slices/AuthSlice";

const MainPage = () => {
  const { address, isConnected, error } = useAppSelector(
    (state) => state.AuthReducer
  );
  const dispatch = useAppDispatch();

  const toggleAuth = () => {
    if (!address) {
      dispatch(requestAccounts());
    } else {
      dispatch(AuthSlice.actions.logout());
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.connectWrapper}>
        <Button onClick={() => toggleAuth()}>
          {isConnected ? "Logout" : "Get public key"}
        </Button>
        <div>{isConnected ? address : "MetaMask is locked - please login"}</div>
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </main>
  );
};

export default MainPage;
