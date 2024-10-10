import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import favoritesReducer from './favoritesSlice'
import productsReducer from './productsSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    products: productsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
