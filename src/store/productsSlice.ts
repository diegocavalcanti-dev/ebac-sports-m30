// src/store/productsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App' // Certifique-se de que o caminho está correto

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
      state.items = action.payload // Define os produtos recebidos na ação
    }
  }
})

export const { setProdutos } = productsSlice.actions // Exporta a ação
export default productsSlice.reducer
