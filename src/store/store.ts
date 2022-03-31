import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import AuthReducer from './Slices/AuthSlice';

export const rootReduces = combineReducers({
  AuthReducer
});

export const store = configureStore({
  reducer: rootReduces
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
