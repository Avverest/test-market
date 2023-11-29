import { FC } from 'react'
import { clsx } from 'shared/lib'
import cls from './StoreTable.module.css'
import { AddToCart, Sort } from 'feature/ui'
import { Categories, Product } from 'shared/config'

interface StoreTableProps {
  place: Categories
  data: Record<string, Product>
}
export const StoreTable: FC<StoreTableProps> = (props) => {
  const { place, data } = props

  return (
    <table>
      <thead>
        <tr>
          <th>
            Наименование
            <Sort field='name' place={place} />
          </th>
          <th>
            Кол-во
            <Sort field='count' place={place} />
          </th>
          <th>
            Цена за ед.
            <Sort field='price' place={place} />
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map(item => {
          const { count, name, price } = data[item]
          return (
            <tr className={clsx('', { [cls.disable]: count === 0 })} key={item}>
              <td
                style={{ textAlign: 'left' }}
              >{name}
              </td>
              <td>{count}</td>
              <td>{price}</td>
              <td>
                <AddToCart id={item} disabled={count === 0} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
