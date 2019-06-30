import React, {FunctionComponent} from 'react'
import {Redirect, RouteComponentProps} from '@reach/router'
import {AppStore} from 'stores/AppStore'
import {observer} from 'mobx-react-lite'

type Props = { component: FunctionComponent } & RouteComponentProps

const REDIRECT_URL = '/login'

const ProtectedRoute: FunctionComponent<Props> = ({component: Component, ...rest}) => {
  const { isLoggedIn } = AppStore
  if (!isLoggedIn) {
    return <Redirect to={REDIRECT_URL} noThrow/>
  }

  return (
    <Component {...rest} />
  );
};

export default observer(
  ProtectedRoute
);
