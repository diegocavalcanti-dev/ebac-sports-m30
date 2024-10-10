import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface CartState {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Produto>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (!existingItem) {
        state.items.push(action.payload)
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart(state) {
      state.items = []
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
