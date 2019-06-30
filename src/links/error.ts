import {onError} from "apollo-link-error";
import {AUTH_ACCESS_TOKEN, AuthenticationService} from 'services/Authentication'
import {Observable} from 'apollo-link';
import {ServerError} from 'apollo-link-http-common'
import {AppStore} from 'stores/AppStore'

export default onError(({ networkError, operation, forward }) => {
  // if (!graphQLErrors || !graphQLErrors.length) {
  //   return;
  // }

  const { accessToken, refreshToken } = AuthenticationService.getTokens();
  if (
    networkError &&
    (networkError as ServerError).statusCode &&
    (networkError as ServerError).statusCode !== 401
  )  {
    return
  }
  if (
    !accessToken ||
    !refreshToken
  ) {
    return;
  }

  return new Observable(observer => {
    AuthenticationService.askNewToken()
      .then(({ access_token }) => {
        localStorage.setItem(AUTH_ACCESS_TOKEN, access_token);

        operation.setContext(() => ({
          headers: {
            authorization: `Bearer ${access_token}` || null,
          },
        }));
      })
      .catch(refreshError => {
        console.log('CATCHED PROMISE', refreshError)
        AuthenticationService.logout()
        AppStore.loggedOff()
        window.location.href = "/login"
        observer.error(refreshError);
      })
      .then(() => {
        const subscriber = {
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        };

        // Retry last failed request
        forward(operation).subscribe(subscriber);
      })
      .catch(refreshError => {
        console.log('CATCHED PROMISE 2 ', refreshError)
        AuthenticationService.logout()
        AppStore.loggedOff()
        window.location.href = "/login"
        observer.error(refreshError);
      });
  });
})
