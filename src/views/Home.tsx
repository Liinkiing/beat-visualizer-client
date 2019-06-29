import * as React from 'react'
import {FunctionComponent} from 'react'
import styled from 'styled-components/macro'
import Page from 'components/Page'
import Card from 'components/ui/Card'

const HomeInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Home: FunctionComponent = props => {

  return (
    <Page>
      <HomeInner>
        <Card>
          <h1>Home</h1>
        </Card>
      </HomeInner>
    </Page>
  )
}

export default Home
