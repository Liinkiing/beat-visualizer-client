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
  flex: 1;
  max-width: 300px;
 }
 & > main {
  flex: 3;
 }
`

const App: FunctionComponent = () => {
  return (
    <>
      <AppBackground pointsCount={100}/>
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
      </AppInner>
    </>
  );
}

export default hot(
  App
)
