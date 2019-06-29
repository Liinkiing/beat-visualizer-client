import React, {useRef} from 'react'
import {animated, useSpring} from 'react-spring'
import styled from 'styled-components/macro'
import {BackgroundPoint} from '@types'
import {randomBoolean, randomRange} from 'utils/functions'
import {red} from 'styles/modules/colors'
import {calc, getPointStyle, SpringProps} from 'components/ui/AppBackground/springs'

interface Props {
  readonly pointsCount?: number
}

const generatePoints = (count: number): BackgroundPoint[] =>
  Array
    .from(Array<BackgroundPoint>(count), _ => ({
      blurred: randomBoolean(),
      depth: randomRange(0, 10),
      color: red,
      radius: randomRange(3, 12),
      x: randomRange(0, window.innerWidth),
      y: randomRange(0, window.innerHeight),
    }))

const AppBackgroundInner = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

const AppBackground: React.FC<Props> = (props) => {
  const { pointsCount } = props
  const points = useRef(generatePoints(pointsCount!))
  const [springProps, set] = useSpring<SpringProps>(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const onMouseMove: React.MouseEventHandler = ({ clientX: x, clientY: y }) => set({xy: calc(x, y)})

  return (
    <AppBackgroundInner onMouseMove={onMouseMove}>
      {points.current.map((point, i) =>
        <animated.div key={i} style={getPointStyle(springProps, point)}/>
      )}
    </AppBackgroundInner>
  )
}

AppBackground.defaultProps = {
  pointsCount: 20
}

export default AppBackground
