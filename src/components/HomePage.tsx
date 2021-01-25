import { useSelector } from 'react-redux'
import { Wallet } from '../redux/types'
import CreateModal from './modals/CreateModal'
import { StyledMain } from './styled/styled'
import Toast from './Toast'
import WalletItem from './WalletItem'

function HomePage() {
  const modal = useSelector((state: any) => state.modal.createModal)
  const modalType = useSelector((state: any) => state.modal.modalType)
  const walletsList = useSelector((state: any) => state.wallets.walletsList)
  const message = useSelector((state: any) => state.modal.toastMessage)

  return (
    <div className='home pt-3'>
      {message.messageValue && (
        <Toast value={message.messageValue} type={message.messageType} />
      )}
      {/*Modal Window*/}

      <CreateModal
        theme={'create'}
        title={modalType === 'create' ? 'Create wallet' : 'Add funds'}
        modalType={modalType || ''}
        className={modal ? 'visible' : 'invisible'}
      />

      <StyledMain className='content'>
        {!walletsList.length ? (
          <span>No wallets yet... Create a new one!</span>
        ) : (
          walletsList.map((wallet: Wallet) => (
            <WalletItem
              theme={wallet.currency}
              key={wallet.id}
              wallet={wallet}
              id={wallet.id}
            />
          ))
        )}
      </StyledMain>
    </div>
  )
}

export default HomePage
