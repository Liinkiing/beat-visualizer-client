export type Color = string

export interface BackgroundPoint {
  readonly radius?: number,
  readonly color?: Color,
  readonly x: number,
  readonly y: number,
  readonly blurred?: boolean
  readonly depth?: number
}

export type SpotifyUserScope = string
