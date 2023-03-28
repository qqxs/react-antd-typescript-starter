import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit'

import counterReducer from './reducer/counter-reducer'
import meReducer from './reducer/me-reducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    me: meReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
