import React from 'react'
import styled from 'styled-components/macro'
import {dark, white} from 'styles/modules/colors'
import {rgba} from 'polished'

interface Props {

}

const CardInner = styled.div`
  pointer-events: all;
  padding: 30px;
  background: ${white};
  border-radius: 5px;
  box-shadow: 0 20px 25px -5px ${rgba(dark, 0.15)},0 10px 10px -5px rgba(0,0,0,.04);
`

const Card: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <CardInner>
      {children}
    </CardInner>
  )
}

export default Card
