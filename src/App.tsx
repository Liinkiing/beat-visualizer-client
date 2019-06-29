import React, {FunctionComponent} from "react"
import {hot} from 'react-hot-loader/root'
import {setConfig} from 'react-hot-loader';
import styled from 'styled-components/macro'
import AppBackground from 'components/ui/AppBackground'

setConfig({
  reloadHooks: true,
});

const AppInner = styled.div`
  
`

const App: FunctionComponent = () => {
  return (
    <AppInner>
      <AppBackground pointsCount={100}/>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <h2>App content</h2>
      </main>
    </AppInner>
  );
}

export default hot(
  App
)
