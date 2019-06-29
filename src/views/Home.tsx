import * as React from 'react'
import {FunctionComponent} from 'react'
import styled from 'styled-components/macro'
import Page from 'components/Page'

const HomeInner = styled.div`

`

const Home: FunctionComponent = props => {

  return (
    <Page>
      <HomeInner>
        <h1>Home</h1>
      </HomeInner>
    </Page>
  )
}

export default Home
