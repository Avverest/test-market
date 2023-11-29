import { FC } from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage: FC = () => {
  return (
    <div>
      <h2>Страницы по такому адресу не существует</h2>
      <Link to='/'>вернуться на главную</Link>
    </div>
  )
}
