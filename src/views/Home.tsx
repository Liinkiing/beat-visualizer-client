import * as React from 'react'
import {FunctionComponent} from 'react'
import styled from 'styled-components/macro'
import Page from 'components/Page'
import Card from 'components/ui/Card'
import {useCurrentUser} from 'contexts/user'

const HomeInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const Home: FunctionComponent = props => {
  const user = useCurrentUser()!

  return (
    <Page>
      <HomeInner>
        <Card>
          <h1>Home</h1>
          {user.playlists.items.map(playlist =>
            <li key={playlist.id}><a href={playlist.uri}>{playlist.name}</a></li>
          )}
        </Card>
      </HomeInner>
    </Page>
  )
}

export default Home
