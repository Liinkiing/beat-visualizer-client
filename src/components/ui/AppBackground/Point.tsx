import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Color} from '@types'
import {red} from 'styles/modules/colors'

export interface Props {
  readonly radius?: number,
  readonly color?: Color,
  readonly x: number,
  readonly y: number,
  readonly blurred?: boolean
  readonly depth?: number
}

const PointInner = styled.div`
  position: absolute;
  border-radius: 100%;
  background: ${({ color }: Props) => color};
  height: ${({ radius }: Props) => `${radius! * 2}px`};
  width: ${({ radius }: Props) => `${radius! * 2}px`};
  left: ${({ x }: Props) => `${x}px`};
  top: ${({ y }: Props) => `${y}px`};
  ${({ blurred, depth }: Props) => blurred && css`filter: blur(${depth! * 2}px)`};
`

const Point: React.FC<Props> = (props) => {

  return (
    <PointInner {...props}>

    </PointInner>
  )
}

Point.defaultProps = {
  radius: 20,
  color: red,
  depth: 1,
  blurred: false
}

export default Point
