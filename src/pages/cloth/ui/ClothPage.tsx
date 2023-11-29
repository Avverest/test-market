import { FC } from 'react'
import { StoreTable } from 'widgets'
import { Pagination } from 'shared/ui'
import { setNextPage, setPrevPage, useAppDispatch } from 'app/store'
import { usePagination } from 'shared/utils'

const Path = 'cloth'

export const ClothPage: FC = () => {
  const { data, maxPage, page } = usePagination(Path)
  const dispatch = useAppDispatch()

  return (
    <>
      <h2>Одежда</h2>
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
