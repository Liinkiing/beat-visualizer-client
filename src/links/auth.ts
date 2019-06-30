import {setContext} from "apollo-link-context";
import {AuthenticationService} from 'services/Authentication'

export default setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      ...(AuthenticationService.hasAccessToken ? {
        Authorization: `Bearer ${AuthenticationService.getAccessToken()}`
      } : {})
    }
  }
})
