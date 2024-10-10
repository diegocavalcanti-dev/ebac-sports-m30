import { useSelector } from 'react-redux'

import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store'

const Header = () => {
  const CartItens = useSelector((state: RootReducer) => state.carrinho.itens)

  const FavoriteItens = useSelector(
    (state: RootReducer) => state.carrinho.favoritos
  )

  const valorTotal = CartItens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{FavoriteItens.length} favoritos</span>
        <img src={cesta} />
        <span>
          {CartItens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
