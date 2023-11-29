import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { foodMockData } from '../mock/food.ts'
import { Product } from 'shared/config'
import { clothMockData } from 'app/store/mock/cloth.ts'
import { electronicsMockData } from 'app/store/mock/electronics.ts'

interface State {
  cart: Record<string, Product>
  cloth: Record<string, Product>
  electronics: Record<string, Product>
  food: Record<string, Product>
}

export const getKey = (id: string): keyof State => id.split('-')[0] as keyof State

const initialState: State = {
  cart: {},
  cloth: clothMockData,
  food: foodMockData,
  electronics: electronicsMockData,
}

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    setItemToCart: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const key = getKey(id)
      state.cart[id] = { ...state[key][id], count: 1 }
      state[key][id].count--
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const key = getKey(id)
      state[key][id].count += state.cart[id].count
      delete state.cart[id]
    },
    setIncreaseCount: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const key = getKey(id)
      state[key][id].count -= 1
      state.cart[id].count += 1
    },
    setDecreaseCount: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const key = getKey(id)
      state[key][id].count += 1
      state.cart[id].count -= 1
    },
    clearCart: (state) => {
      Object.keys(state.cart).forEach(item => {
        const key = getKey(item)
        state[key][item].count += state.cart[item].count
        delete state.cart[item]
      })
    },
    setSort: (state, action: PayloadAction<{ path?: string, field: keyof Product, desc: boolean}>) => {
      const { path, field, desc } = action.payload
      const key = getKey(path ?? '')
      const category = state[key]
      if (!category) return
      state[key] = Object.values(category)
        .sort((a, b) => desc ? a[field] < b[field] ? 1 : -1 : a[field] > b[field] ? 1 : -1)
        .reduce((acc, item) => ({ ...acc, [item.id]: item }), {})
    },
  },
})

export const { setItemToCart, removeFromCart, setIncreaseCount, setDecreaseCount, clearCart, setSort } = marketSlice.actions
