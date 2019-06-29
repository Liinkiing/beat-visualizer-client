import React, {useRef} from 'react'
import styled from 'styled-components/macro'
import Point from 'components/ui/AppBackground/Point'
import {BackgroundPoint} from '@types'
import {randomBoolean, randomRange} from 'utils/functions'
import {red} from 'styles/modules/colors'

interface Props {
  readonly pointsCount?: number
}

const generatePoints = (count: number): BackgroundPoint[] =>
  Array
    .from(Array<BackgroundPoint>(count), _ => ({
      blurred: randomBoolean(),
      depth: randomRange(0, 10),
      color: red,
      radius: randomRange(10, 30),
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

  return (
    <AppBackgroundInner>
      {points.current.map((point, i) =>
        <Point key={i} {...point}/>
      )}
    </AppBackgroundInner>
  )
}

AppBackground.defaultProps = {
  pointsCount: 20
}

export default AppBackground
