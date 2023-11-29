import { RouteProps } from 'react-router-dom'
import { ClothPage, ElectronicsPage, FoodPage, NotFoundPage } from 'pages'
import { Paths } from 'shared/config'

export const routeConfig: RouteProps[] = [
  {
    path: Paths.food.path,
    element: <FoodPage />,
  },
  {
    path: Paths.electronics.path,
    element: <ElectronicsPage />,
  },
  {
    path: Paths.cloth.path,
    element: <ClothPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]
