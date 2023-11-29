import { FC, useEffect, useState } from 'react'
import { setSort, useAppDispatch } from 'app/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Categories, Product } from 'shared/config'
import cls from './Sort.module.css'

interface SortProps {
  field: keyof Product
  place: Categories
}
export const Sort: FC<SortProps> = (props) => {
  const { field, place } = props
  const [desc, setDesc] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(
    () => {
      dispatch(setSort({ path: place, field, desc }))
    },
    [desc],
  )
  return (
    <button className={cls.button} onClick={() => setDesc(prevState => !prevState)}>
      <FontAwesomeIcon icon={desc ? faArrowUp : faArrowDown} />
    </button>
  )
}
