import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch, removeFromCart } from 'app/store'
import cls from './RemoveFromCart.module.css'

interface RemoveFromCartProps {
  id: string
}
export const RemoveFromCart: FC<RemoveFromCartProps> = (props) => {
  const { id } = props
  const dispatch = useAppDispatch()

  return (
    <button
      className={cls.button}
      onClick={() => dispatch(removeFromCart(id))}
      title='Удалить из корзины'
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  )
}
