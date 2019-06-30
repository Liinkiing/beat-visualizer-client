import React, {FunctionComponent, useEffect} from "react"
import {hot} from 'react-hot-loader/root'
import {setConfig} from 'react-hot-loader';
import styled from 'styled-components/macro'
import AppBackground from 'components/ui/AppBackground'
import {Location, Router} from '@reach/router'
import Route from 'components/Route'
import Home from 'views/Home'
import About from 'views/About'
import AppNav from 'components/AppNav'
import posed, {PoseGroup} from 'react-pose'
import ProtectedRoute from 'components/ProtectedRoute'
import AnonRoute from 'components/AnonRoute'
import Login from 'views/Login'
import Authentication from 'views/Authentication'
import {CurrentUserContext} from 'contexts/user'
import {AppStore} from 'stores/AppStore'
import {useViewerQuery} from 'graphql/components'

setConfig({
  reloadHooks: true,
});

const RoutesContainer = posed.div({
  transition: { duration: 1000 },
  enter: {opacity: 1, zIndex: 1, beforeChildren: true, y: 0, perspective: '300px', rotateX: '0deg'},
  exit: {opacity: 0, zIndex: -1, y: -40, perspective: '300px', rotateX: '20deg' }
});

const PosedRouter: FunctionComponent = ({children}) => (
  <Location>
    {({location}) => (
      <PoseGroup>
        <RoutesContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RoutesContainer>
      </PoseGroup>
    )}
  </Location>
);

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
  & > div {
    width: 100%;
    height: 100%;
    & > div[role="group"] {
      width: inherit;
      height: inherit;
    }
  }
 }
 & > header, & > main {
  z-index: 1;
 }
`

const App: FunctionComponent = () => {
  const viewer = useViewerQuery({ suspend: true })
  useEffect(() => {
    if (viewer && viewer.data && viewer.data.viewer !== null)  {
      AppStore.loggedIn()
    } else {
      AppStore.loggedOff()
    }
  }, [viewer])

  return (
    <CurrentUserContext.Provider value={viewer && viewer.data && viewer.data.viewer ? viewer.data.viewer : null}>
      <AppInner>
        <header>
          <AppNav/>
        </header>
        <main>
          <PosedRouter>
            <ProtectedRoute component={Home} path="/"/>
            <AnonRoute component={Login} path="/login"/>
            <AnonRoute component={Authentication} path="/authentication"/>
            <Route component={About} path="/about"/>
          </PosedRouter>
        </main>
        <AppBackground pointsCount={100}/>
      </AppInner>
    </CurrentUserContext.Provider>
  );
}

export default hot(
  App
)
