import { bounceIn, fadeIn } from 'react-animations'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { colors, gradients } from './_variables'
import { resolution } from './mixin'

export const bounceInAnimation = keyframes(bounceIn)
export const fadeInAnimation = keyframes(fadeIn)

export const StyledApp = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  padding: 0.5rem;
  background: linear-gradient(45deg, ${gradients['background-gradient']}) fixed;
  ${resolution.xs`
    padding: 1rem;
  `};
`

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: fit-content;
  width: 100%;
  z-index: 1030;
`
export const StyledNav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 90px;
  width: 100%;
  overflow: hidden;
  ${resolution.sm`
    justify-content: space-between;
  `}
`

export const StyledToggler = styled.div`
  position: absolute;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 36px;
  width: 36px;
  padding: 0.5rem;
  cursor: pointer;

  ${resolution.xs`
    right: .75rem;
  `}

  ${resolution.sm`
    display: none;
  `}

  & .toggler__line {
    background: ${colors.dark};
    height: 2px;
    width: 100%;
    margin: 2px 0;
    transition: width 150ms ease-in;
  }

  &.active .toggler__line {
    background: ${colors.secondary};

    &:nth-child(2) {
      width: 80%;
    }
  }
`

export const StyledNavbarNav = styled.div`
  position: fixed;
  top: 90px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.dark};
  height: 0;
  width: 100%;
  transition: all 0.36s cubic-bezier(0.32, 0.08, 0.24, 1),
    height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
  overflow: hidden;
  z-index: 1030;

  ${resolution.sm`
    position: relative;
    top: initial;
    flex-direction: row;
    justify-content: flex-end;
    background: transparent;
    height: fit-content;
    width: fit-content;
  `}

  &.active {
    height: 200px;
  }
`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  font-size: 1.125rem;
  ${resolution.sm`
    padding: .75rem 1rem;
  `}

  &.brand {
    display: flex;
    flex-direction: column;
    font-size: initial;
    color: ${colors.dark};
    text-transform: lowercase;
    ${resolution.sm`
      flex-direction: row;
    `}

    .brand__primary {
      font-weight: 600;
    }
    .brand__separator {
      font-weight: 400;
      display: none;
      ${resolution.sm`
        display: inline;
      `}
    }
    .brand__secondary {
      font-weight: 400;
      color: ${colors.secondary};
    }
  }
`

export const StyledContent = styled.div`
  position: relative;
  height: 100%;
  max-width: 960px;
  margin: 106px auto 0;
`

export const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  max-width: 816px;
  margin: 0 auto;
  padding: 1rem;
`

export const StyledWallet = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 8px;
  color: ${colors.dark};
  animation: ${bounceInAnimation} ease-out;
  cursor: pointer;
  
  &:nth-of-type(odd) {
    animation-duration: 250ms;
  }  
  &:nth-of-type(even) {
    animation-duration: 350ms;
  }
  ${props => {
    switch (props.theme) {
      case 'uah':
        return {
          background: `linear-gradient(135deg, ${gradients['yellow-gradient']})`,
        }
      case 'usd':
        return {
          background: `linear-gradient(135deg, ${gradients['green-gradient']})`,
        }
      case 'eur':
        return {
          background: `linear-gradient(-45deg, ${gradients['party-bliss-gradient']})`,
        }
      default:
        return { background: 'none' }
    }
  }};
  
  height: 200px;
  width: 360px;
  margin: 0.75rem 0;
  padding: 1.5rem 1rem;
  box-shadow: 0 3px 8px 2px rgba(0, 0, 0, 0.25);

  & .wallet__header {
    margin-bottom: 1rem;
  }

  & .wallet__number {
    font-size: 1.25rem;
    filter: ${props => {
      switch (props.theme) {
        case 'uah':
          return `drop-shadow(0 0 5px rgba(0, 0, 0, 0.25))`
        case 'usd':
          return `drop-shadow(0 0 5px rgba(255, 255, 255, 0.15))`
      }
    }}
`

export const StyledButton = styled.button`
  position: relative;
  border: 1px solid transparent;
  border-radius: 8px;
  background: #fff;
  color: ${colors.dark};
  cursor: pointer;
  font-size: 1rem;
  outline: 0 !important;
  overflow: hidden;
  padding: 0.5rem;
  text-align: center;

  &.wallet__button {
    background: transparent;
    padding: 4px 3px;

    & .wallet__button__text {
      background: -moz-linear-gradient(
        left,
        #4d4d4d,
        0.4,
        #4d4d4d,
        0.5,
        white,
        0.6,
        #4d4d4d,
        #4d4d4d
      );
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(0, #4d4d4d),
        color-stop(0.4, #4d4d4d),
        color-stop(0.5, white),
        color-stop(0.6, #4d4d4d),
        color-stop(1, #4d4d4d)
      );
      background-position: -37px;
      -moz-background-clip: text;
      -webkit-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
      animation: slideOverText 2000ms linear infinite;
      @keyframes slideOverText {
        0% {
          background-position: -37px;
        }
        100% {
          background-position: 40px;
        }
      }
    }
    transition: all 150ms ease-in;

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.25);
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.25);
  mouse-events: none;
  z-index: 1031;
  animation: 250ms ${fadeInAnimation} ease-in-out;

  & .modal__card {
    border-radius: 8px;
    border: ${colors['grey-light']};
    background: #fafafa;
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 260px;
    overflow: hidden;
    z-index: 1031;

    & .modal__header {
      padding: 1rem;
      ${props => {
        switch (props.theme) {
          case 'create':
            return { background: colors.success, color: colors['white-fa'] }
          case 'recharge':
            return { background: colors.warning }
          case 'remove':
            return { background: colors.danger, color: colors['white-fa'] }
          default:
            return { background: colors['grey-light'] }
        }
      }};
      border-bottom: 1px solid ${colors['grey-light']};

      & .modal__title {
        margin: 0;
      }
    }

    & .modal__body {
      text-align: justify;
      padding: 1rem;
    }
  }
`

export const StyledToast = styled.div`
  position: fixed;
  top: 6.5rem;
  right: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.25);
  ${props => {
    switch (props.theme.toLowerCase()) {
      case 'success!':
        return { background: colors['success-light-75'] }
      case 'error!':
        return { background: colors['danger-light-75'], color: '#fff' }
      default:
        return { background: colors.dark, color: colors['white-fa'] }
    }
  }};
  width: fit-content;
  overflow: hidden;
  z-index: 1031;

  & .toast__header {
    padding: 0.5rem;
    border-bottom: 1px solid rgba(225, 225, 225, 0.25);

    & .toast__title {
      font-size: 1.25rem;
      margin: 0;
    }
  }

  & .toast__body {
    padding: 0.5rem;

    & .toast__text {
      font-size: 1rem;
      margin: 0;
    }
  }
`
