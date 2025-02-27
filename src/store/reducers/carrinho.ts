import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((item) => item.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens = [...state.itens, produto]
      }
    },
    addToFavorites: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      if (!state.favoritos.find((item) => item.id === favorito.id)) {
        state.favoritos = [...state.favoritos, favorito]
      }
    },
    removeToFavorites: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      if (state.favoritos.find((item) => item.id === favorito.id)) {
        const favoritosSemProduto = state.favoritos.filter(
          (item) => item.id !== favorito.id
        )

        state.favoritos = favoritosSemProduto
      }
    }
  }
})

export const { addToCart, addToFavorites, removeToFavorites } =
  carrinhoSlice.actions

export default carrinhoSlice.reducer
