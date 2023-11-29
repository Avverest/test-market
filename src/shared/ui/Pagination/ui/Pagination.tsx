import { FC } from 'react'
import cls from 'shared/ui/Pagination/ui/Pagination.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { clsx } from 'shared/lib'

interface PaginationProps {
  maxPage: number
  page: number
  prevPage: () => void
  nextPage: () => void
}
export const Pagination: FC<PaginationProps> = (props) => {
  const { maxPage, page, prevPage, nextPage } = props

  const length = new Array(maxPage).fill(1)

  return (
    <div className={cls.pagination}>
      <button onClick={prevPage} disabled={page === 1}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {length.map((item, idx) => (
        <div className={clsx(cls.item, { [cls.active]: item + idx === page })} key={idx}>
          {item + idx}
        </div>
      ))}
      <button onClick={nextPage} disabled={page === maxPage}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  )
}
