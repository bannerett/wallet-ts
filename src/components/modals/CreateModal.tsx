import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  createMessage,
  createModalHide,
  createWallet,
} from '../../redux/actions'
import { MessageInterface } from '../../redux/types'
import { StyledModalWrapper } from '../styled/styled'
import { CreateForm } from './CreateForm'
import { ModalCard } from './ModalCard'

export default function CreateModal({ title, modalType, className }: any) {
  const dispatch = useDispatch()
  const initialWallet = {
    currency: '',
    amount: 0,
    id: `444${Date.now()}`,
    history: [],
  }
  const initialMessage: MessageInterface = { messageType: '', messageValue: '' }
  const [wallet, setWallet] = useState(initialWallet)
  const [message, setMessage] = useState(initialMessage)

  const clearMessage = (timeout: number) => {
    const _timeout = setTimeout(() => {
      setMessage(initialMessage)
    }, timeout)
    return () => clearTimeout(_timeout)
  }

  const submitHandler = (e: any) => {
    e.preventDefault()

    if (!wallet.currency.trim()) {
      setMessage({
        ...message,
        messageType: 'Error!',
        messageValue: 'Select your currency',
      })

      return clearMessage(0)
    }

    setMessage({
      ...message,
      messageType: 'Success!',
      messageValue: `Wallet created!`,
    })

    dispatch(createWallet(wallet))

    setTimeout(() => dispatch(createModalHide()), 0)

    setWallet(initialWallet)
    return clearMessage(0)
  }

  useEffect(() => {
    message.messageValue.trim() && dispatch(createMessage(message))
  }, [message, dispatch])

  return (
    <StyledModalWrapper
      className={`modal__wrapper ${className}`}
      theme={modalType}
    >
      <ModalCard title={title} theme={'create'} className={''} wallet={wallet}>
        <CreateForm
          submitHandler={submitHandler}
          wallet={wallet}
          setWallet={setWallet}
        />
      </ModalCard>
    </StyledModalWrapper>
  )
}
