class Client {

  constructor(private readonly host: string, private readonly authorizeEndpoint: string) {}

  get authorizeUrl (): string {
    return `${this.host}${this.authorizeEndpoint}`
  }
}

if(!process.env.REACT_APP_API_HOST_URL) {
  throw new Error('Could not initialize API Client because env key "REACT_APP_API_HOST_URL" is missing.')
}
if(!process.env.REACT_APP_API_AUTHORIZE_ENDPOINT) {
  throw new Error('Could not initialize API Client because env key "REACT_APP_API_AUTHORIZE_ENDPOINT" is missing.')
}

export const BeatVisualizerApiClient = new Client(
  process.env.REACT_APP_API_HOST_URL,
  process.env.REACT_APP_API_AUTHORIZE_ENDPOINT
)
