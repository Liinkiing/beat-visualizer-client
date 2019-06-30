import React from 'react'
import styled from 'styled-components/macro'
import {Link} from '@reach/router'
import {dark, white} from 'styles/modules/colors'
import {rgba} from 'polished'
import {AuthenticationService} from 'services/Authentication'
import AppButton from 'components/ui/AppButton'
import {observer} from 'mobx-react-lite'
import {AppStore} from 'stores/AppStore'
import {useViewerQuery} from 'graphql/components'

const LogoutButton = styled(AppButton)``

const AppNavInner = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${dark};
  color: ${white};
  box-shadow: 10px 0 40px ${rgba(dark, 0.3)};
  ${LogoutButton} {
    align-self: center;
    margin-top: auto;
    width: 60%;
    margin-bottom: 15px;
  }
`

const transparentWhite = rgba(white, 0.025);

const LinksContainer = styled.ul`
 li {
  position: relative;
  border-bottom: 2px solid ${transparentWhite};
  & > * {
    position: relative;
    z-index: 1;
  }
  &:hover {
    cursor: pointer;
    &:before {
      transform: scaleX(1);
    }
  }
  &:before {
    transition: transform .2s;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${transparentWhite};
    transform: scaleX(0);
    transform-origin: left center;
    z-index: 0;
  }
  & a {
    display: block;
    padding: 20px;
    width: 100%;
    height: 100%;
    &[aria-current] {
      opacity: 1;
      background: ${transparentWhite};
    }
  }
 }
`

const AppNav: React.FC = () => {
  const viewer = useViewerQuery({ suspend: true })
  const { isLoggedIn } = AppStore
  const handleLogout = () => {
    AuthenticationService.logout()
    AppStore.loggedOff()
    viewer.refetch()
  }

  return (
    <AppNavInner>
      <LinksContainer>
        {isLoggedIn && <li><Link to="/">Home</Link></li>}
        {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
        <li><Link to="/about">About</Link></li>
      </LinksContainer>
      {isLoggedIn && <LogoutButton onClick={handleLogout}>Logout</LogoutButton>}
    </AppNavInner>
  )
}

export default observer(
  AppNav
)
