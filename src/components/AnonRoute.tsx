import React, {FunctionComponent} from 'react'
import {Redirect, RouteComponentProps} from '@reach/router'
import {observer} from 'mobx-react-lite'
import {AppStore} from 'stores/AppStore'

type Props = { component: FunctionComponent } & RouteComponentProps

const REDIRECT_URL = '/'

const AnonRoute: FunctionComponent<Props> = ({component: Component, ...rest}) => {
  const { isLoggedIn } = AppStore
  if (isLoggedIn) {
    return <Redirect to={REDIRECT_URL} noThrow/>
  }

  return (
    <Component {...rest} />
  );
};

export default observer(
  AnonRoute
);
