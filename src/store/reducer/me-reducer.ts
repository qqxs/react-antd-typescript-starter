import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '../';

const initialState: Partial<Response.Me> = {};

type KeyType = keyof Response.Me;

export const counterSlice = createSlice({
  name: 'me',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setMe: (state, action: PayloadAction<Response.Me>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state = { ...action.payload }  // failed
      // state.id = action.payload.id // success
      !!action.payload &&
        Object.keys(action.payload).forEach((key) => {
          state[key as KeyType] = (action.payload as any)[key];
        });
    },
  },
});

// action
export const { setMe } = counterSlice.actions;

// selector
export const selectMe = (state: RootState) => {
  return state.me;
};

export default counterSlice.reducer;
