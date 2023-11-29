import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Categories } from 'shared/config'

interface State {
  maxPageItems: number
  food: number
  cloth: number
  electronics: number
}

const initialState: State = {
  maxPageItems: 10,
  food: 1,
  electronics: 1,
  cloth: 1,
}

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setNextPage: (state, action: PayloadAction<Categories>) => {
      state[action.payload] += 1
    },
    setPrevPage: (state, action: PayloadAction<Categories>) => {
      state[action.payload] -= 1
    },
  },
})

export const { setNextPage, setPrevPage } = configSlice.actions
