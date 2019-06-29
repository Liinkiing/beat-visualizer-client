import React from 'react'
import styled from 'styled-components/macro'
import {Link} from '@reach/router'
import {dark, white} from 'styles/modules/colors'

const AppNavInner = styled.nav`
  width: 100%;
  height: 100%;
  background: ${dark};
  color: ${white};
`

const AppNav: React.FC = () => {

  return (
    <AppNavInner>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </AppNavInner>
  )
}

export default AppNav
