import {onError} from "apollo-link-error";
import {AUTH_ACCESS_TOKEN, AuthenticationService} from 'services/Authentication'
import {Observable} from 'apollo-link';

const DENIED_MESSAGE = "Access denied to this field."

export default onError(({ graphQLErrors, operation, forward }) => {
  if (!graphQLErrors || !graphQLErrors.length) {
    return;
  }

  const { accessToken, refreshToken } = AuthenticationService.getTokens();
  const [error] = graphQLErrors;

  if (
    !error.extensions ||
    error.extensions.code !== DENIED_MESSAGE ||
    !accessToken ||
    !refreshToken
  ) {
    return;
  }

  return new Observable(observer => {
    AuthenticationService.askNewToken()
      .then(data => {
        localStorage.setItem(AUTH_ACCESS_TOKEN, data.access_token);

        operation.setContext(() => ({
          headers: {
            authorization: `Bearer ${data.access_token}` || null,
          },
        }));
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
        observer.error(refreshError);
      });
  });
})
