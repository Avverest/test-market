import { FC } from 'react'
import { StoreTable } from 'widgets'
import { usePagination } from 'shared/utils'
import { Pagination } from 'shared/ui'
import { setNextPage, setPrevPage, useAppDispatch } from 'app/store'

const Path = 'food'
export const FoodPage: FC = () => {
  const { data, maxPage, page } = usePagination(Path)
  const dispatch = useAppDispatch()

  return (
    <>
      <h2>Еда</h2>
      <StoreTable place={Path} data={data} />
      <span className='spacer' />
      <Pagination
        maxPage={maxPage}
        page={page}
        prevPage={() => dispatch(setPrevPage(Path))}
        nextPage={() => dispatch(setNextPage(Path))}
      />
    </>
  )
}
