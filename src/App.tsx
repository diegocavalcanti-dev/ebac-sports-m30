// src/App.tsx
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { addToCart } from './store/cartSlice'
import { addToFavorites, removeFromFavorites } from './store/favoritesSlice'
import { setProdutos } from './store/productsSlice'
import { RootState } from './store'

export interface Produto {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const produtos = useSelector((state: RootState) => state.products.items)
  const carrinho = useSelector((state: RootState) => state.cart.items)
  const favoritos = useSelector((state: RootState) => state.favorites.items)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => {
        dispatch(setProdutos(res))
      })
  }, [dispatch])

  const adicionarAoCarrinho = (produto: Produto) => {
    dispatch(addToCart(produto))
  }

  const favoritar = (produto: Produto) => {
    const existingItem = favoritos.find((p) => p.id === produto.id)
    if (existingItem) {
      dispatch(removeFromFavorites(produto.id))
    } else {
      dispatch(addToFavorites(produto))
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
