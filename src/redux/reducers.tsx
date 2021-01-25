import { combineReducers } from 'redux'
import { modalReducer } from './modalReducer'
import { walletsReducer } from './walletsReducer'

export const reducers = combineReducers({
  wallets: walletsReducer,
  modal: modalReducer,
})
