import { configureStore, combineReducers, type ThunkAction, type Action } from '@reduxjs/toolkit';

import counterReducer from './features/counter-slice';
import meReducer from './features/me-slice';

const rootReducer = combineReducers({
  counter: counterReducer,
  me: meReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
