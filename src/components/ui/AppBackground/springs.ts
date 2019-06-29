import {AnimatedValue, ForwardedProps} from 'react-spring'
import {CSSProperties} from 'react'
import {BackgroundPoint} from '@types'
import {randomArrayItem} from 'utils/functions'

export type OverwriteKeys<A, B> = { [K in keyof A]: K extends keyof B ? B[K] : A[K] };

export interface SpringProps {
  xy: number[]
}

export const calc = (x: number, y: number) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

export const translations = [
  (x: number, y: number) => `translate3d(${x / 5}px,${y / 5}px,0)`,
  (x: number, y: number) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`,
  (x: number, y: number) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`,
  (x: number, y: number) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`
]


export const getPointStyle = (springProps: AnimatedValue<ForwardedProps<OverwriteKeys<SpringProps, CSSProperties>>>, point: BackgroundPoint): CSSProperties => ({
  transform: springProps.xy.interpolate(randomArrayItem(translations) as unknown as any),
  width: point.radius! * 2,
  background: point.color,
  borderRadius: '100%',
  position: 'absolute',
  height: point.radius! * 2,
  ...(point.blurred ? {filter: `blur(${point.depth! * 2}px)`} : {}),
  left: point.x,
  top: point.y
})
