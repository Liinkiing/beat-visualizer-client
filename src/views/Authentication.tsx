import * as React from 'react'
import {Redirect, RouteComponentProps} from '@reach/router'
import {parse, ParsedQuery} from 'query-string'
import {AuthenticationService} from 'services/Authentication'
import {useViewerQuery} from 'graphql/components'
import {AppStore} from 'stores/AppStore'

interface Props extends RouteComponentProps {

}

const Authentication: React.FC<Props> = ({ location }) => {
  const viewer = useViewerQuery()

  const query: ParsedQuery = parse(location!.search)
  if (query.access_token && query.refresh_token) {
    const { access_token, refresh_token } = query
    AuthenticationService.login(access_token as string, refresh_token as string)
    AppStore.loggedIn()
    viewer.refetch()
  } else {
    return <Redirect to="/" noThrow/>
  }

  return null
}

export default Authentication
