import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Paths } from 'shared/config'
import cls from './Navbar.module.css'
import { clsx } from 'shared/lib'

export const Navbar: FC = () => {
  const location = useLocation()
  return (
    <nav className={cls.container}>
      <ul className={cls.bar}>
        {Object.values(Paths).map(({ path, label }, idx) => (
          <li className={clsx(cls.item, { [cls.active]: location.pathname === path })} key={idx}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
