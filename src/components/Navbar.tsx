import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createModalShow } from '../redux/actions'
import {
  StyledHeader,
  StyledLink,
  StyledNav,
  StyledNavbarNav,
  StyledToggler,
} from './styled/styled'

export default function Navbar() {
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => setToggle(!toggle)
  return (
    <StyledHeader>
      <StyledNav className={`toggler ${toggle ? 'active' : ''}`}>
        {/*Page Brand*/}
        <StyledLink exact to={'/'} className='brand'>
          <span className='brand__primary'>
            Wallet<span className='brand__separator'>&nbsp;|&nbsp;</span>
          </span>
          <span className='brand__secondary'>your personal bank</span>
        </StyledLink>

        <StyledToggler
          className={`toggler ${toggle ? 'active' : ''}`}
          onClick={() => handleToggle()}
        >
          <span className='toggler__line' />
          <span className='toggler__line' />
          <span className='toggler__line' />
          {/*<i className='fas fa-bars'></i>*/}
        </StyledToggler>

        {/*Navbar Navigation*/}
        <StyledNavbarNav className={toggle ? 'active' : ''}>
          {/*Add New Wallet Btn*/}
          <button
            className='btn text-primary border-0'
            style={{ padding: '8px 12px', fontSize: '1.125rem' }}
            onClick={() => {
              toggle && setToggle(false)
              dispatch(createModalShow('create'))
            }}
          >
            <i className='far fa-plus-square' />
          </button>

          {/*Home Page Link*/}
          <StyledLink
            exact
            to={'/'}
            className='nav__link'
            onClick={() => toggle && handleToggle()}
          >
            <i className='fas fa-home' />
          </StyledLink>
        </StyledNavbarNav>
      </StyledNav>
    </StyledHeader>
  )
}
