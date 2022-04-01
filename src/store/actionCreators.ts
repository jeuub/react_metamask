import { AppDispatch } from "./store"
import { AuthSlice } from "./Slices/AuthSlice";
import Web3 from "web3";
declare var window: any;

const detectedProvider = () => {
  let provider;
  if (window.etherium) {
    provider = window.ethereum
  } else if (window.web3) {
    provider = window.web3.currentProvider;
  } else {
    provider = null;
  }
  return provider
}

export const requestAccounts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(AuthSlice.actions.userFetching);
    let provider = detectedProvider();
    console.log(provider);
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts()
    if (accounts.length === 0) {
      throw new Error('Please connect to Metamask')
    }
    dispatch(AuthSlice.actions.userFetchedSuccess(accounts))
  }
  catch (e) {
    if (typeof e === "string") {
      dispatch(AuthSlice.actions.userFetchedError(e));
    } else if (e instanceof Error) {
      dispatch(AuthSlice.actions.userFetchedError(e.message));
    }

  }
};