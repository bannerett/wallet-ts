import { useHistory } from 'react-router'
import { StyledWallet } from './styled/styled'

export default function WalletItem({ theme, className = '', wallet }: any) {
  const history = useHistory()

  let currencySymbol = null
  if (wallet.currency === 'uah') {
    currencySymbol = '₴'
  } else if (wallet.currency === 'usd') {
    currencySymbol = '$'
  } else {
    currencySymbol = '€'
  }

  return (
    <StyledWallet
      theme={theme}
      className={`wallet ${className}`}
      onClick={() => history.push(`/wallet/${wallet.id}`)}
    >
      <div className='wallet__header'>
        <h2 className='wallet__title'>{wallet.currency.toUpperCase()}</h2>
      </div>

      <div className='wallet__body'>
        <pre className='wallet__number'>
          {wallet.id != null && wallet.id.match(/.{1,4}/g).join(' ')}
        </pre>

        <div className='wallet__text'>
          Available:&nbsp;
          <span>
            <span style={{ fontWeight: 600 }}>
              {wallet.amount.toFixed(2)}&nbsp;
            </span>
            {currencySymbol}
          </span>
        </div>
      </div>
    </StyledWallet>
  )
}
