import { FC } from 'react'
import { setItemToCart, useAppDispatch, useAppSelector } from 'app/store'

interface AddToCartProps {
  id: string
  disabled: boolean
}
export const AddToCart: FC<AddToCartProps> = (props) => {
  const { id, disabled } = props

  const item = useAppSelector(store => store.market.cart[id])
  const dispatch = useAppDispatch()

  if (disabled) return <span>Товар закончился</span>
  if (item) return <span>Товар в корзине</span>

  return (
    <button onClick={() => dispatch(setItemToCart(id))}>Добавить в корзину</button>
  )
}
