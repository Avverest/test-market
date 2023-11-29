import { FC } from 'react'
import { Cart, Navbar } from 'widgets'
import { Outlet } from 'react-router-dom'
import cls from './Layout.module.css'

export const Layout: FC = () => {
  return (
    <>
      <main className={cls.container}>
        <Navbar />
        <div className={cls.content}>
          <Outlet />
        </div>
      </main>
      <Cart />
    </>
  )
}
