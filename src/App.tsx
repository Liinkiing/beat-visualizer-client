import React, {FunctionComponent} from "react"
import {hot} from 'react-hot-loader/root'
import {setConfig} from 'react-hot-loader';
import styled from "styled-components"

setConfig({
  reloadHooks: true,
});

const AppInner = styled.div`
  
`

const App: FunctionComponent = () => {
  return (
    <AppInner>
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
