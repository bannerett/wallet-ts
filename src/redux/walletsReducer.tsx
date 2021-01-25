import {
  InitWallet,
  WALLET_ADD,
  WALLET_CONVERT,
  WALLET_RECHARGE_FINISH,
  WALLET_RECHARGE_INIT,
  WalletReducer,
} from './types'

const setLocalStorage = (currentState: WalletReducer) => {
  localStorage.setItem('appData', JSON.stringify(currentState))
}

export const walletsReducer = (
  state: WalletReducer = {
    walletsList: [],
    rechargeFrom: '',
    rechargeTo: '',
  },
  action: any
) => {
  let currentState = {
    ...state,
    walletsList: [...state.walletsList, action.payload],
  }

  switch (action.type) {
    case WALLET_ADD:
      setLocalStorage(currentState)
      return currentState

    case WALLET_RECHARGE_INIT:
      const filtered = state.walletsList.find(
        wallet => wallet.id === action.payload.id && wallet
      )
      console.log('Wallet recharge init payload', filtered)

      setLocalStorage({ ...state, rechargeTo: filtered })
      return { ...state, rechargeTo: filtered }

    case WALLET_RECHARGE_FINISH:
      console.log('Action.Payload', action.payload)

      // state.walletsList.find(
      //   wallet =>
      //     wallet.id === action.payload.id &&
      //     (wallet.amount = +action.payload.amount)
      // )

      const mappedWallets = state.walletsList.map(wallet => {
        console.log(wallet)
        if (wallet.id === action.payload.id && wallet.amount != null) {
          const edited = {
            ...wallet,
            amount: parseFloat(
              (wallet.amount + +action.payload.amount).toFixed(2)
            ),
            history: [...wallet.history, wallet.amount],
          }

          console.log(edited)
          return edited
        }

        return wallet
      })

      // {
      //   if (wallet.id === action.payload.id) {
      //     wallet.amount = +action.payload.amount
      //
      //     const modState = {
      //       ...state,
      //       rechargeTo: '',
      //     }
      //     console.log(modState)
      //     setLocalStorage(modState)
      //   }
      // })

      //
      // const modState = state
      //
      // console.log(state)
      setLocalStorage({
        ...state,
        walletsList: [...mappedWallets],
        rechargeTo: '',
      })
      return { ...state, walletsList: [...mappedWallets], rechargeTo: '' }

    case WALLET_CONVERT:
      const mapped = calculateSend(
        state.walletsList,
        action.payload.sendFrom,
        action.payload.sendTo
      )

      console.log('Mapped', mapped)
      currentState = { ...state, walletsList: mapped, rechargeTo: '' }
      setLocalStorage(currentState)
      return currentState

    default:
      const localData = localStorage.getItem('appData')

      if (localData) {
        const appData: WalletReducer = JSON.parse(localData)
        return { ...state, ...((appData as unknown) as InitWallet) }
      } else {
        localStorage.setItem('appData', JSON.stringify(state))
        return { ...state, ...(action.payload as InitWallet) }
      }
  }
}

function calculateSend(allWallets: any, from: any, to: any) {
  const sendToWallet = allWallets.find((w: any) => w.id === to.id && w)
  const uahToUsdRate: number = 0.0355
  const uahToEurRate: number = 0.0291
  const eurToUahRate: number = 33.3
  const eurToUsdRate: number = 1.2
  const usdToEurRate: number = 0.8
  const usdToUahRate: number = 28.3

  console.log(from, to)
  console.log(sendToWallet)

  return allWallets.map((wallet: any) => {
    if (from.id === wallet.id) {
      console.log('From wallet', wallet.id)
      return {
        ...wallet,
        amount: wallet.amount - to.amount,
        history: [...wallet.history, wallet.amount],
      }
    }

    if (sendToWallet.id === wallet.id) {
      let result: number
      console.log('To wallet', wallet.id)

      switch (from.currency) {
        //  SEND FROM UAH => UAH | USD | EUR
        case 'uah':
          if (sendToWallet.currency === 'uah') {
            return {
              ...wallet,
              amount: wallet.amount + from.amount,
              history: [...wallet.history, wallet.amount],
            }
          } else if (sendToWallet.currency === 'usd') {
            result = from.amount * uahToUsdRate

            return {
              ...wallet,
              amount: wallet.amount + result,
              history: [...wallet.history, wallet.amount],
            }
          } else if (sendToWallet.currency === 'eur') {
            result = from.amount * uahToEurRate

            return {
              ...wallet,
              amount: wallet.amount + result,
              history: [...wallet.history, wallet.amount],
            }
          }
          break

        //  SEND FROM EUR => EUR | USD | UAH
        case 'eur':
          if (sendToWallet.currency === 'eur') {
            return {
              ...wallet,
              amount: wallet.amount + from.amount,
              history: [...wallet.history, wallet.amount],
            }
          } else if (sendToWallet.currency === 'uah') {
            result = from.amount * eurToUahRate
            return {
              ...wallet,
              amount: wallet.amount + result,
              history: [...wallet.history, wallet.amount],
            }
          } else if (sendToWallet.currency === 'usd') {
            result = from.amount * eurToUsdRate
            return {
              ...wallet,
              amount: wallet.amount + result,
              history: [...wallet.history, wallet.amount],
            }
          }
          break

        //  SEND FROM USD => USD | EUR | UAH
        case 'usd':
          if (sendToWallet.currency === 'usd') {
            return {
              ...wallet,
              amount: wallet.amount + from.amount,
              history: [...wallet.history, wallet.amount],
            }
          } else if (sendToWallet.currency === 'eur') {
            result = from.amount * usdToEurRate
            return {
              ...wallet,
              amount: parseFloat((wallet.amount + result).toFixed(2)),
              history: [...wallet.history, wallet.amount],
            }
          } else if (sendToWallet.currency === 'uah') {
            result = from.amount * usdToUahRate
            return {
              ...wallet,
              amount: wallet.amount + result,
              history: [...wallet.history, wallet.amount],
            }
          }
          break

        default:
          break
      }
    }

    return wallet
  })
}
