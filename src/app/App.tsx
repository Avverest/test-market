import { FC } from 'react'
import { AppRouter } from 'app/router'

export const App: FC = () => {
  return (
    <div className='wrapper'>
      <AppRouter />
    </div>
  )
}
