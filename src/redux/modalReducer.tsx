import {
  CREATE_MODAL_HIDE,
  CREATE_MODAL_SHOW,
  MessageInterface,
  RECHARGE_MODAL_HIDE,
  RECHARGE_MODAL_SHOW,
  TOAST_MESSAGE,
} from './types'

export const modalReducer = (
  state = {
    createModal: false,
    rechargeModal: false,
    modalType: '',
    toastMessage: { messageType: '', messageValue: '' } as MessageInterface,
  },
  action: { type: any; payload: MessageInterface }
) => {
  switch (action.type) {
    case CREATE_MODAL_SHOW:
      return { ...state, createModal: true, modalType: action.payload }
    case CREATE_MODAL_HIDE:
      return { ...state, createModal: false, modalType: '' }
    case RECHARGE_MODAL_SHOW:
      return { ...state, rechargeModal: true, modalType: action.payload }
    case RECHARGE_MODAL_HIDE:
      return { ...state, rechargeModal: false, modalType: action.payload }
    case TOAST_MESSAGE:
      return {
        ...state,
        toastMessage: action.payload,
      }
    default:
      return state
  }
}
