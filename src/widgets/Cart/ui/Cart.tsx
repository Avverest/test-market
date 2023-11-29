import { FC, useState } from 'react'
import cls from './Cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { clsx } from 'shared/lib'

export const Cart: FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={clsx(cls.content, { [cls.open]: open })}>
      <button
        onClick={() => setOpen(prevState => !prevState)}
        className={cls.button}
        title={open ? 'Свернуть корзину' : 'Развернуть корзину'}
      >
        <FontAwesomeIcon icon={open ? faArrowRight : faArrowLeft} size='xl' />
      </button>
      <div className={cls.head}>
        <FontAwesomeIcon icon={faCartShopping} size='2xl' />
        <h3>Корзина</h3>
      </div>
    </div>
  )
}
