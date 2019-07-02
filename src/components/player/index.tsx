import React from 'react'
import styled from 'styled-components/macro'
import {ViewerQueryUserFragment} from 'graphql/components'

interface Props {
  user: ViewerQueryUserFragment
}

const PlayerInner = styled.div`
  
`

const Player: React.FC<Props> = ({ user, ...rest}) => {

  return (
    <PlayerInner {...rest}>
      <h1>Player of {user.displayName}</h1>
    </PlayerInner>
  )
}

export default Player
