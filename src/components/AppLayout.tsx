import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

import HomePage from './HomePage'
import Navbar from './Navbar'
import { StyledApp, StyledContent } from './styled/styled'
import WalletView from './WalletView'

export default function AppLayout() {
  const walletsList = useSelector((state: any) => state.wallets.walletsList)

  return (
    <StyledApp className='App'>
      <Navbar />

      <StyledContent>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          {walletsList.map((wallet: { id: any }) => (
            <Route path={`/wallet/${wallet.id}`} key={wallet.id}>
              <WalletView wallet={wallet} />
            </Route>
          ))}
          <Redirect path={'*'} to={'/'} />
        </Switch>
      </StyledContent>
    </StyledApp>
  )
}
