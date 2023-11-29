import { FC, HTMLProps } from 'react'
import cls from './Input.module.css'

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string
}

export const Input: FC<InputProps> = (props) => {
  const { label, ...inputProps } = props

  return (
    <div className={cls.input}>
      <label>{label}</label>
      <input {...inputProps} />
    </div>
  )
}
