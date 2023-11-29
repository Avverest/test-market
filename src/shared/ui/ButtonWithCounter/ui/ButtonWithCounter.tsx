import { FC } from 'react'
import cls from './ButtonWithCounter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

interface ButtonWithCounterProps {
  counter?: number
  onDecrease?: () => void
  onIncrease?: () => void
  increaseDisable?: boolean
}
export const ButtonWithCounter: FC<ButtonWithCounterProps> = (props) => {
  const { counter = 0, onIncrease, onDecrease, increaseDisable } = props
  return (
    <div className={cls.button}>
      <button className={cls.icon} onClick={onDecrease} disabled={counter === 1}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span className={cls.counter}>{counter}</span>
      <button className={cls.icon} onClick={onIncrease} disabled={increaseDisable}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}
