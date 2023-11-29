import { FC } from 'react'
import { ButtonWithCounter } from 'shared/ui'
import { useAppDispatch, useAppSelector, getKey, setDecreaseCount, setIncreaseCount } from 'app/store'

interface ChangeCartItemCountProps {
  id: string
}
export const ChangeCartItemCount: FC<ChangeCartItemCountProps> = (props) => {
  const { id } = props
  const key = getKey(id)

  const count = useAppSelector(store => store.market[key][id].count)
  const counter = useAppSelector(store => store.market.cart[id].count)
  const dispatch = useAppDispatch()

  return (
    <ButtonWithCounter
      counter={counter}
      onDecrease={() => dispatch(setDecreaseCount(id))}
      onIncrease={() => dispatch(setIncreaseCount(id))}
      increaseDisable={count === 0}
    />
  )
}
