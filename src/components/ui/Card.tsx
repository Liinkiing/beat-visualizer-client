import React from 'react'
import styled from 'styled-components/macro'
import {white} from 'styles/modules/colors'
import {MAIN_BOX_SHADOW} from 'styles/modules/variables'

interface Props {

}

const CardInner = styled.div`
  pointer-events: all;
  padding: 30px;
  background: ${white};
  border-radius: 5px;
  ${MAIN_BOX_SHADOW};
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
