import {SpotifyUserScope} from '@types';

export const AUTH_REFRESH_TOKEN = 'refresh_token'
export const AUTH_ACCESS_TOKEN = 'access_token'

const LOGOUT_REDIRECT_URL = '/login'
const LOGIN_REDIRECT_URL = '/'

interface SpotifyTokenRefreshResponse {
  access_token: string,
  token_type: 'Bearer',
  expires_in: number,
  scope: SpotifyUserScope,
}

class Authentication {

  constructor(private readonly refreshTokenUrl: string) {}

  public login = (accessToken: string, refreshToken: string) => {
    this.setTokens(accessToken, refreshToken)
  };

  get hasAccessToken(): boolean {
    return (
      localStorage.getItem(AUTH_ACCESS_TOKEN) !== "undefined" &&
      localStorage.getItem(AUTH_ACCESS_TOKEN) !== undefined &&
      localStorage.getItem(AUTH_ACCESS_TOKEN) !== null
    );
  }

  get hasRefreshToken(): boolean {
    return (
      localStorage.getItem(AUTH_REFRESH_TOKEN) !== "undefined" &&
      localStorage.getItem(AUTH_REFRESH_TOKEN) !== undefined &&
      localStorage.getItem(AUTH_REFRESH_TOKEN) !== null
    );
  }

  get hasTokens(): boolean {
    return this.hasAccessToken && this.hasAccessToken
  }

  private removeToken = (): void => {
    localStorage.removeItem(AUTH_ACCESS_TOKEN);
  };

  private removeRefreshToken = (): void => {
    localStorage.removeItem(AUTH_REFRESH_TOKEN);
  };

  public logout = (): void => {
    this.removeToken()
    this.removeRefreshToken()
  }

  private setAccessToken = (accessToken: string): void => {
    localStorage.setItem(AUTH_ACCESS_TOKEN, accessToken);
  };

  private setRefreshToken = (refreshToken: string): void => {
    localStorage.setItem(AUTH_REFRESH_TOKEN, refreshToken);
  };

  public getAccessToken = (): string | null => localStorage.getItem(AUTH_ACCESS_TOKEN);

  public getRefreshToken = (): string | null => localStorage.getItem(AUTH_REFRESH_TOKEN);

  public getTokens = (): { accessToken: string | null, refreshToken: string | null } => ({
    accessToken: this.getAccessToken(),
    refreshToken: this.getRefreshToken()
  })

  private setTokens = (accessToken: string, refreshToken: string) => {
    this.setAccessToken(accessToken);
    this.setRefreshToken(refreshToken);
  };

  public askNewToken = async (): Promise<SpotifyTokenRefreshResponse> => {
    if (this.hasTokens) {
      let request = await fetch(this.refreshTokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh_token: this.getRefreshToken()
        })
      });
      if (request.ok) {
        return request.json();
      }

      return Promise.reject();
    }

    return Promise.reject();
  };

}

if (!process.env.REACT_APP_REFRESH_TOKEN_URL) {
  throw new Error('Could not initialize Authentication service because env key "REACT_APP_REFRESH_TOKEN_URL" is missing.')
}

export const AuthenticationService = new Authentication(
  process.env.REACT_APP_REFRESH_TOKEN_URL
)
