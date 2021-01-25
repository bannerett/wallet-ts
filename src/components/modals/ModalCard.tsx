export interface ModalCardInterface {
  title: string
  theme: string
  children?: any
  wallet: any
  className?: string
}
export const ModalCard = ({ title, theme, children }: ModalCardInterface) => {
  return (
    <div className='modal__card'>
      <div className='modal__header'>
        <h3 className='modal__title'>{title}</h3>
      </div>

      <div className='modal__body'>{children}</div>
    </div>
  )
}
