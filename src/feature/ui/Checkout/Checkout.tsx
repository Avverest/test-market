import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Input, Modal } from 'shared/ui'
import cls from './Checkout.module.css'
import { clearCart, useAppDispatch } from 'app/store'

export const Checkout: FC = () => {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    addr: '',
  })

  const dispatch = useAppDispatch()

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    alert(JSON.stringify(state))
    setOpen(false)
    dispatch(clearCart())
  }

  const onCancel = (): void => {
    setOpen(false)
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>Оформить заказ</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <form onSubmit={onSubmit} className={cls.form}>
          <Input
            type='text'
            label='Имя'
            name='firstName'
            onChange={onChange}
          />
          <Input
            type='text'
            label='Фамилия'
            name='lastName'
            onChange={onChange}
          />
          <Input
            type='email'
            label='E-mail'
            name='email'
            onChange={onChange}
          />
          <Input
            type='text'
            label='Адрес'
            name='addr'
            onChange={onChange}
          />
          <div className={cls.actions}>
            <button onClick={onCancel} type='button'>Отменить</button>
            <button type='submit'>Оформить</button>
          </div>
        </form>
      </Modal>
    </>
  )
}
