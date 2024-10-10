// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import favoritesReducer from './favoritesSlice'
import productsReducer from './productsSlice' // Importe o slice de produtos

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    products: productsReducer // Adicione o slice de produtos aqui
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
