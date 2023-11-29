import { FC, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig.tsx'
import { Layout } from 'pages'
import { Paths } from 'shared/config'

export const AppRouter: FC = () => {
  return (
    <Suspense fallback='Loading...'>
      <Routes>
        <Route path='/' element={<Layout />}>
          {routeConfig.map(
            ({ path, element, ...passedProps }, idx) => (
              <Route {...passedProps} path={path} element={element} key={idx} />
            ),
          )}
          <Route index element={<Navigate to={Paths.food.path} />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
