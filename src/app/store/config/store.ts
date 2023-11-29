import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { marketSlice } from './marketSlice.ts'
import { configSlice } from './configSlice.ts'

export const store = configureStore({
  reducer: {
    [marketSlice.name]: marketSlice.reducer,
    [configSlice.name]: configSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
