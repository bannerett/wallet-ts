import {
  CREATE_MODAL_HIDE,
  CREATE_MODAL_SHOW,
  InitWallet,
  MessageInterface,
  TOAST_MESSAGE,
  Wallet,
  WALLET_ADD,
  WALLET_CONVERT,
  WALLET_RECHARGE_FINISH,
  WALLET_RECHARGE_INIT,
} from './types'

export const createWallet = (wallet: Wallet) => async (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  dispatch(({
    type: WALLET_ADD,
    payload: { ...wallet },
  } as unknown) as InitWallet)
}

export const createMessage = (message: MessageInterface) => (
  dispatch: (arg0: { payload: MessageInterface; type: string }) => any
) => {
  dispatch({
    type: TOAST_MESSAGE,
    payload: message as MessageInterface,
  })

  const timeout = setTimeout(() => {
    dispatch({
      type: TOAST_MESSAGE,
      payload: { messageType: '', messageValue: '' },
    })
  }, 3000)

  return () => clearTimeout(timeout)
}

export const rechargeWallet = (payload: any) => (
  dispatch: (arg0: { payload: any; type: string }) => void
) => {
  dispatch({ type: WALLET_RECHARGE_INIT, payload })
}

export const rechargeWalletFinish = (payload: any) => (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  dispatch({ type: WALLET_RECHARGE_FINISH, payload })
}

export const createModalShow = (modalType: string) => (
  dispatch: (arg0: { type: string; payload: string }) => any
) => {
  dispatch({ type: CREATE_MODAL_SHOW, payload: modalType })
}

export const createModalHide = () => ({ type: CREATE_MODAL_HIDE })

export const sendToWallet = (sendFrom: any, sendTo: any) => (
  dispatch: (arg0: {
    type: string
    payload: { sendFrom: any; sendTo: any }
  }) => any
) => dispatch({ type: WALLET_CONVERT, payload: { sendFrom, sendTo } })
