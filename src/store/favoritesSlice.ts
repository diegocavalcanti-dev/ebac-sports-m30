import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface FavoritesState {
  items: Produto[]
}

const initialState: FavoritesState = {
  items: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<Produto>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (!existingItem) {
        state.items.push(action.payload)
      }
    },
    removeFromFavorites(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
