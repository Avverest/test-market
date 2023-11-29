import { FC } from 'react'

export interface Data {
  id: string
  name: string
  count: number
  price: string
}
interface TableProps {
  data: Data[]
}

export const TableRow: FC = () => {
  return (
    <tr />
  )
}

export const Table: FC<TableProps> = (props) => {
  const { data } = props

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Наименование</th>
          <th>Кол-во</th>
          <th>Цена</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td>{item.price}</td>
            <td>
              <button>test</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
