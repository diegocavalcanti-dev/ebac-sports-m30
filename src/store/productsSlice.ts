import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface ProductsState {
  items: Produto[]
}

const initialState: ProductsState = {
  items: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProdutos: (state, action: PayloadAction<Produto[]>) => {
      state.items = action.payload
    }
  }
})

export const { setProdutos } = productsSlice.actions
export default productsSlice.reducer
