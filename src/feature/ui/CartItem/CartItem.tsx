import { FC, PropsWithChildren } from 'react'
import cls from './CartItem.module.css'

interface CartItemProps extends PropsWithChildren {
  label: string
}
export const CartItem: FC<CartItemProps> = (props) => {
  const { label, children } = props
  return (
    <div className={cls.content}>
      <div className={cls.label}>{label}</div>
      <div className={cls.actions}>
        {children}
      </div>
    </div>
  )
}
