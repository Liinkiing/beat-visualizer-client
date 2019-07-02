import React from 'react'
import styled from 'styled-components/macro'
import {ViewerQueryUserFragment} from 'graphql/components'
import BottomBar from 'components/player/BottomBar'
import {dark} from 'styles/modules/colors'

interface Props {
  user: ViewerQueryUserFragment
}

const PlayerInner = styled.div`
  display: flex;
  flex-direction: column;
`

const PlayerBottomBar = styled(BottomBar)`
  margin-top: auto;
  height: 100px;
  background: ${dark};
`

const Player: React.FC<Props> = (props) => {
  const { user } = props

  return (
    <PlayerInner {...props}>
      <PlayerBottomBar player={user.player}/>
    </PlayerInner>
  )
}

export default Player
