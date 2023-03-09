import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: Partial<Response.Me> = {}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setMe: (state, action: PayloadAction<Response.Me>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state = action.payload
    }
  }
})

export const { setMe } = counterSlice.actions

export default counterSlice.reducer
