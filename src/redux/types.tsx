export const APP_INIT = 'APP::INIT'
export const WALLET_ADD = 'WALLET::ADD'
export const WALLET_RECHARGE_INIT = 'WALLET_RECHARGE::INIT'
export const WALLET_RECHARGE_FINISH = 'WALLET_RECHARGE::FINISH'
export const WALLET_CONVERT = 'WALLET::CONVERT'
export const TOAST_MESSAGE = 'TOAST::MESSAGE'
export const CREATE_MODAL_SHOW = 'CREATE_MODAL::SHOW'
export const CREATE_MODAL_HIDE = 'CREATE_MODAL::HIDE'
export const RECHARGE_MODAL_SHOW = 'RECHARGE_MODAL::SHOW'
export const RECHARGE_MODAL_HIDE = 'RECHARGE_MODAL::HIDE'

export interface InitWallet {
  type: typeof APP_INIT
  payload: Wallet
}

export interface Wallet {
  amount?: number
  className?: string
  currency: string
  id: string | any
  history: Array<number>
  theme?: string
  [key: string]: any
}

export interface MessageInterface {
  messageType: string
  messageValue: string
}

export interface WalletReducer {
  walletsList: Wallet[]
  rechargeFrom: any
  rechargeTo: any
}
