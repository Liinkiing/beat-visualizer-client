import * as React from 'react'
import {FunctionComponent, useCallback} from 'react'
import styled from 'styled-components/macro'
import Page from 'components/Page'
import Card from 'components/ui/Card'
import SpotifyIcon from 'components/ui/icons/Spotify'
import AppButton from 'components/ui/AppButton'
import {BeatVisualizerApiClient} from 'services/clients/BeatVisualizer'

const LoginInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoginButton = styled(AppButton)`

`

const Login: FunctionComponent = props => {
  const { authorizeUrl } = BeatVisualizerApiClient
  const onLogin = useCallback(() => {
    window.open(authorizeUrl, '_top')
  }, [authorizeUrl])

  return (
    <Page>
      <LoginInner>
        <Card>
          <h1>Login</h1>
          <LoginButton onClick={onLogin} variant="spotify" icon={SpotifyIcon}>Se connecter avec Spotify</LoginButton>
        </Card>
      </LoginInner>
    </Page>
  )
}

export default Login
