import React from 'react'
import styled from 'styled-components/macro'

interface Props {

}

const CardInner = styled.div`
  
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
