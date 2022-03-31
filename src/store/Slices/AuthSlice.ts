import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthType = {
  isConnected: boolean;
  isLoading: boolean;
  address: string;
  error: string;
}

const initialState: AuthType = {
  isConnected: false,
  isLoading: false,
  address: '',
  error: '',
}

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true;
    },
    userFetchedSuccess(state, action) {
      state.isLoading = false;
      state.isConnected = true;
      state.address = action.payload[0];
    },
    userFetchedError(state, action) {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    logout(state) {
      state.address = '';
      state.error = '';
      state.isConnected = false;
    }
  }
}
);

export default AuthSlice.reducer;