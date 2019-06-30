import React, {FunctionComponent} from 'react'
import {Redirect, RouteComponentProps} from '@reach/router'
import {AuthenticationService} from 'services/Authentication'

type Props = { component: FunctionComponent } & RouteComponentProps

const REDIRECT_URL = '/'

const AnonRoute: FunctionComponent<Props> = ({component: Component, ...rest}) => {
  if (AuthenticationService.isLoggedIn) {
    return <Redirect to={REDIRECT_URL} noThrow/>
  }

  return (
    <Component {...rest} />
  );
};

export default AnonRoute;
