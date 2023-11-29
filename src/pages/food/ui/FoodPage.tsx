import { FC } from 'react'
import { Table } from 'shared/ui'
import { Data } from 'shared/ui/Table/Table.tsx'

const data: Data[] = [
  {
    id: 1,
    name: 'test',
    count: 4,
    price: '$10',
  },
  {
    id: 2,
    name: 'test',
    count: 2,
    price: '$14',
  },
]

export const FoodPage: FC = () => {
  return (
    <>
      <h2>Еда</h2>
      <Table data={data} />
    </>
  )
}
