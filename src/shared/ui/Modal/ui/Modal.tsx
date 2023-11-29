import { FC, PropsWithChildren, ReactNode } from 'react'
import cls from './Modal.module.css'

interface ModalProps extends PropsWithChildren {
  open: boolean
  onClose: () => void
  actions?: ReactNode
}

export const Modal: FC<ModalProps> = (props) => {
  const { open, onClose, children, actions } = props

  if (!open) return null

  return (
    <div className={cls.modal}>
      <div className={cls.substrate} onClick={() => onClose()} />
      <div className={cls.container}>
        <div className={cls.iconClose}>
          <div className={cls.icon} onClick={onClose}>
            ×
          </div>
        </div>
        {children}
        <div className={cls.actions}>{actions}</div>
      </div>
    </div>
  )
}
