import { Categories, Product } from 'shared/config'
import { useAppSelector } from 'app/store'

interface ReturnType {
  data: Record<string, Product>
  maxPage: number
  page: number
}

export const usePagination = (category: Categories): ReturnType => {
  const categoryData = useAppSelector(store => store.market[category])
  const maxPageItems = useAppSelector(store => store.config.maxPageItems)
  const page = useAppSelector(store => store.config[category])

  const ids = Object.keys(categoryData).slice(page * maxPageItems - maxPageItems, page * maxPageItems)
  const data = ids.reduce((acc, item) => ({ ...acc, [item]: categoryData[item] }), {})
  const maxPage = Math.ceil(Object.keys(categoryData).length / maxPageItems)

  return {
    data,
    maxPage,
    page,
  }
}
