import * as React from 'react'
import {FunctionComponent} from 'react'
import styled from 'styled-components/macro'
import Page from 'components/Page'
import Player from 'components/player'
import {useCurrentUser} from 'contexts/user'

const HomeInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AppPlayer = styled(Player)`
  width: 100%;
  height: 100%;
  pointer-events: all;
`

const Home: FunctionComponent = props => {
  const user = useCurrentUser()

  return (
    <Page>
      <HomeInner>
        {user && <AppPlayer user={user}/>}
      </HomeInner>
    </Page>
  )
}

export default Home
