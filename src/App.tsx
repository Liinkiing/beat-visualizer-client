import React, {FunctionComponent} from "react"
import {hot} from 'react-hot-loader/root'
import {setConfig} from 'react-hot-loader';
import styled from 'styled-components/macro'
import AppBackground from 'components/ui/AppBackground'
import {Router} from '@reach/router'
import Route from 'components/Route'
import Home from 'views/Home'
import About from 'views/About'
import AppNav from 'components/AppNav'

setConfig({
  reloadHooks: true,
});

const AppInner = styled.div`
 position: fixed;
 display: flex;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0; 
 & > header {
  width: 220px;
  align-content: stretch;
 }
 & > main {
  flex: 1;
  pointer-events: none;
  & > div[role="group"] {
    width: 100%;
    height: 100%;
  }
 }
 & > header, & > main {
  z-index: 1;
 }
`

const App: FunctionComponent = () => {
  return (
    <AppInner>
      <header>
        <AppNav/>
      </header>
      <main>
        <Router>
          <Route component={Home} path="/"/>
          <Route component={About} path="/about"/>
        </Router>
      </main>
      <AppBackground pointsCount={100}/>
    </AppInner>
  );
}

export default hot(
  App
)
