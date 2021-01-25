import { createRef, RefObject, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createMessage,
  rechargeWallet,
  rechargeWalletFinish,
  sendToWallet,
} from '../redux/actions'
import { StyledButton, StyledModalWrapper } from './styled/styled'
import Toast from './Toast'

export default function WalletView({ wallet }: any) {
  const dispatch = useDispatch()
  const wallets = useSelector((state: any) => state.wallets.walletsList)
  const message = useSelector((state: any) => state.modal.toastMessage)
  const initial = { amount: 0, currency: '', id: '' }
  const [rechargeToggle, setRechargeToggle] = useState(false)
  const [sendToggle, setSendToggle] = useState(false)
  const [rWallet, setRWallet] = useState(initial)
  const [sendTo, setSendTo] = useState({ id: '', amount: 0 })
  const walletRef: RefObject<HTMLInputElement> = createRef()

  const rechargeHandler = (currentWallet: any) => {
    if (!rechargeToggle) {
      setRechargeToggle(true)
      // setRWallet(wallet)
      dispatch(rechargeWallet(currentWallet))
    } else {
      setRechargeToggle(false)
      dispatch(rechargeWalletFinish(currentWallet))
      // setRWallet(initial)
    }
  }

  const selectHandler = (e: any) => {
    setSendTo({ ...sendTo, id: e.target.value })
  }

  const sendHandler = (fromWallet: any, toWallet: any) => {
    let message = null

    if (toWallet.id.trim() && fromWallet.amount) {
      message = {
        messageType: 'Success!',
        messageValue: 'You sent your money!',
      }
      dispatch(sendToWallet(fromWallet, toWallet))
      dispatch(createMessage(message))
      setSendTo({ ...sendTo, amount: 0 })
      setSendToggle(false)
    } else {
      message = {
        messageType: 'Error!',
        messageValue: 'Select wallet and amount to send',
      }

      dispatch(createMessage(message))
    }
  }

  useEffect(() => {
    setRWallet({ ...wallet, amount: 0 })
  }, [wallet])

  useEffect(() => {
    walletRef.current?.focus()
  }, [walletRef])

  return (
    <>
      {rechargeToggle && (
        <StyledModalWrapper theme={'recharge'}>
          <div className='modal__card'>
            <div className='modal__header'>
              Recharge wallet {wallet.currency}
            </div>
            <div className='modal__body'>
              <input
                className='form-control'
                type='number'
                name='amount'
                value={rWallet.amount}
                ref={walletRef}
                onChange={(e: any) =>
                  setRWallet({ ...rWallet, amount: e.target.value })
                }
              />

              <div className='btn-group mt-2'>
                <button
                  type='button'
                  className='btn btn-sm btn-outline-success'
                  onClick={() => rechargeHandler(rWallet)}
                >
                  add funds
                </button>

                <button
                  className='btn btn-sm btn-outline-danger'
                  onClick={() => setRechargeToggle(!rechargeToggle)}
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </StyledModalWrapper>
      )}

      {sendToggle && (
        <StyledModalWrapper>
          <div className='modal__card'>
            <div className='modal__header'>Send money</div>

            <div className='modal__body'>
              <div>From: {wallet.id}</div>

              <div>
                To:
                <select
                  name='id'
                  id='wallets'
                  className='form-select'
                  onChange={(e: any) => selectHandler(e)}
                >
                  <option value=''>Select wallet...</option>

                  {wallets
                    .filter((f: any) => f.id !== wallet.id && f)
                    .map((w: any) => (
                      <option key={w.id} value={w.id}>
                        {w.currency}: {w.id}
                      </option>
                    ))}
                </select>
              </div>

              <div className='btn-group mt-2'>
                <input
                  type='number'
                  name='amount'
                  value={sendTo.amount === 0 ? '' : sendTo.amount}
                  className='form-control'
                  onChange={(e: any) =>
                    setSendTo({ ...sendTo, amount: +e.target.value })
                  }
                />

                <button
                  className='btn btn-sm btn-outline-success'
                  onClick={() =>
                    sendHandler({ ...wallet, amount: sendTo.amount }, sendTo)
                  }
                >
                  send
                </button>

                <button
                  className='btn btn-sm btn-outline-danger'
                  onClick={() => setSendToggle(false)}
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </StyledModalWrapper>
      )}

      {message.messageValue && (
        <Toast type={message.messageType} value={message.messageValue} />
      )}

      <div className='wallet'>
        <div className='wallet__name'>{wallet.currency}</div>
        <div className='wallet__amount'>{wallet.amount.toFixed(2)}</div>

        <div className='wallet__buttons'>
          <StyledButton
            type='button'
            theme={wallet.currency}
            className='wallet__button'
            onClick={() => rechargeHandler(rWallet)}
          >
            <span className='wallet__button__text'>add funds</span>
          </StyledButton>

          <StyledButton
            theme={wallet.currency}
            className='wallet__button'
            onClick={() => setSendToggle(!sendToggle)}
          >
            <span className='send__button__text'>send</span>
          </StyledButton>
        </div>
      </div>
    </>
  )
}
