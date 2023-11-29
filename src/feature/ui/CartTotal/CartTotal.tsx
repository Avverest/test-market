import { FC, useMemo } from 'react'
import cls from './CartTotal.module.css'
import { useAppSelector } from 'app/store'

export const CartTotal: FC = () => {
  const cartData = useAppSelector(store => store.market.cart)

  const total = useMemo(
    () => {
      return Object.values(cartData).reduce(
        (acc, item) => Number(item.price.slice(1)) * item.count + acc,
        0,
      )
    },
    [cartData],
  )

  return (
    <div className={cls.total}>
      <span className={cls.label}>
        Итого:
      </span>
      <span className={cls.num}>${total}</span>
    </div>
  )
}
