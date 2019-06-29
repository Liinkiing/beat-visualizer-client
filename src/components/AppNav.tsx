import React from 'react'
import styled from 'styled-components/macro'
import Container from 'components/ui/Container'
import {Link} from '@reach/router'

const AppNavInner = styled.nav`
  
`

const AppNav: React.FC = () => {

  return (
    <AppNavInner>
      <Container>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Container>
    </AppNavInner>
  )
}

export default AppNav
