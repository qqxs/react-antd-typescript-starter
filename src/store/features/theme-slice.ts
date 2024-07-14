import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '..';

const sliceName = 'theme';

const initialState = {
  theme: 'default',
};

export const themeSlice = createSlice({
  name: sliceName,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
  initialState,
});

// action
export const { setTheme } = themeSlice.actions;
// selector
export const selectTheme = (state: RootState) => {
  return state.theme.theme;
};

export default themeSlice.reducer;
