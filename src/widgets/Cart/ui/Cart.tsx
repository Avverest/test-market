import { FC, useState } from 'react'
import cls from './Cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from 'app/store'
import { CartItem, CartTotal, ChangeCartItemCount, Checkout, ClearCart, RemoveFromCart } from 'feature/ui'
import { clsx } from 'shared/lib'

export const Cart: FC = () => {
  const [open, setOpen] = useState(false)
  const data = useAppSelector(store => store.market.cart)

  const isEmpty = Object.keys(data).length === 0

  return (
    <div className={clsx(cls.content, { [cls.open]: open })}>
      <div className={cls.head}>
        <button
          onClick={() => setOpen(prevState => !prevState)}
          className={cls.button}
          title={open ? 'Свернуть корзину' : 'Развернуть корзину'}
        >
          <FontAwesomeIcon icon={open ? faArrowRight : faArrowLeft} />
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <h3>Корзина</h3>
      </div>
      <div className={cls.cart}>
        {isEmpty ? <div className={cls.empty}><span>Корзина пуста</span></div> : ''}
        <div className={cls.list}>
          {Object.keys(data).map((item, idx) => (
            <CartItem label={data[item].name} key={idx}>
              <ChangeCartItemCount id={item} />
              <RemoveFromCart id={item} />
            </CartItem>
          ))}
        </div>
      </div>
      {!isEmpty && (
        <>
          <CartTotal />
          <div className={cls.actions}>
            <ClearCart />
            <Checkout />
          </div>
        </>
      )}
    </div>
  )
}
