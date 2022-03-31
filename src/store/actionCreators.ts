import { AppDispatch } from "./store"
import { AuthSlice } from "./Slices/AuthSlice";

export const requestAccounts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(AuthSlice.actions.userFetching);
    let provider = window.ethereum;
    const data = await provider.request({
      method: 'eth_requestAccounts'
    });
    dispatch(AuthSlice.actions.userFetchedSuccess(data))
  }
  catch (e) {
    if (typeof e === "string") {
      dispatch(AuthSlice.actions.userFetchedError(e));
    } else if (e instanceof Error) {
      dispatch(AuthSlice.actions.userFetchedError(e.message));
    }

  }
};