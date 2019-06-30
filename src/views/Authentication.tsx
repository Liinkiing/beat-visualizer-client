import * as React from 'react'
import {Redirect, RouteComponentProps} from '@reach/router'
import {parse, ParsedQuery} from 'query-string'
import {AuthenticationService} from 'services/Authentication'

interface Props extends RouteComponentProps {

}

const Authentication: React.FC<Props> = ({ location }) => {
  const query: ParsedQuery = parse(location!.search)
  if (query.access_token && query.refresh_token) {
    const { access_token, refresh_token } = query
    AuthenticationService.login(access_token as string, refresh_token as string)
  } else {
    return <Redirect to="/" noThrow/>
  }

  return null
}

export default Authentication
