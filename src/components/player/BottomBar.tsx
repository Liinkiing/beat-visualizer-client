import React from 'react'
import styled from 'styled-components/macro'
import AppButton from 'components/ui/AppButton'
import {PlayerBottomBarPlayerFragment, useToggleUserPlayerPlaybackMutation} from 'graphql/components'
import {FiPause, FiPlay} from 'react-icons/fi'

interface Props {
  player: PlayerBottomBarPlayerFragment
}

const BottomBarInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`

const BottomBarButtons = styled.div`
  display: flex;
`

const ActionButton = styled(AppButton)`
  margin: 10px;
`

const BottomBar: React.FC<Props> = ({ player, ...rest}) => {
  const togglePlay = useToggleUserPlayerPlaybackMutation()

  return (
    <BottomBarInner {...rest}>
      <BottomBarButtons>
        <ActionButton>Prev</ActionButton>
        <ActionButton icon={player.playing ? FiPause : FiPlay} iconSize={16} onClick={() => { togglePlay() }}/>
        <ActionButton>Next</ActionButton>
      </BottomBarButtons>
    </BottomBarInner>
  )
}

export default BottomBar
