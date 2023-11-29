import { FC } from 'react'
import cls from './ClearCart.module.css'
import { clearCart, useAppDispatch } from 'app/store'

export const ClearCart: FC = () => {
  const dispatch = useAppDispatch()

  return (
    <button className={cls.clear} onClick={() => dispatch(clearCart())}>Очистить</button>
  )
}
