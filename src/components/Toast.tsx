import { StyledToast } from './styled/styled'

export default function Toast(message: { type?: string; value: string }) {
  return (
    <StyledToast theme={message.type}>
      <div className='toast__body'>
        <p className='toast__text'>{message.value}</p>
      </div>
    </StyledToast>
  )
}
