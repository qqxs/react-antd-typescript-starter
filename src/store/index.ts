import { configureStore, combineReducers, type ThunkAction, type Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './features/counter-slice';
import meReducer from './features/me-slice';
import themeReducer from './features/theme-slice';

const rootReducer = combineReducers({
  counter: counterReducer,
  me: meReducer,
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    // eslint-disable-next-line no-undef
    return !__IS_PRODUCTION__ ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware();
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
