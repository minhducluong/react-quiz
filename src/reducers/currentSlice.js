import { createSlice } from "@reduxjs/toolkit";

const current = createSlice({
  name: 'current',
  initialState: 0,
  reducers: {
    prev: (state, action) => {
      if (state === 0) return action.payload - 1
      else return state - 1
    },
    next: (state, action) => {
      if (state === action.payload - 1) return 0
      else return state + 1
    },
  }
})

const { actions, reducer } = current

export const { prev, next } = actions

export default reducer