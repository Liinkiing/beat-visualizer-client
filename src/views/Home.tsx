import * as React from 'react'
import {FunctionComponent} from 'react'
import styled from 'styled-components/macro'
import Page from 'components/Page'
import Card from 'components/ui/Card'
import AppButton from 'components/ui/AppButton'
import SpotifyIcon from 'components/ui/icons/Spotify'

const HomeInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoginButton = styled(AppButton)`

`

const Home: FunctionComponent = props => {

  return (
    <Page>
      <HomeInner>
        <Card>
          <h1>Home</h1>
          <LoginButton variant="spotify" icon={SpotifyIcon}>Se connecter avec Spotify</LoginButton>
        </Card>
      </HomeInner>
    </Page>
  )
}

export default Home
