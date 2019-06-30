import styled, {css} from 'styled-components/macro'
import {dark, red, spotify, white} from 'styles/modules/colors'
import {Props} from './'
import {MAIN_BOX_SHADOW} from 'styles/modules/variables'

const ICON_SIZE = { width: 32, height: 32 }

const AppButtonPrimaryStyles = css`
  background: ${red};
  color: ${white};
`

const AppButtonSecondaryStyles = css`
  background: ${dark};
  color: ${white};
  &:hover {
    cursor: pointer;
    &:after {
      opacity: 0.1;
    }
  }
`

const AppButtonSpotifyStyles = css`
  background: ${spotify};
  color: ${white};
`

export const AppButtonContentInner = styled.div`
  flex: 1;
  text-align: center;
`

export const AppButtonInner = styled.button`
  transition: transform .15s, box-shadow .3s;
  outline: none;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  padding: 10px;
  text-align: center;
  &:after {
    transition: all .15s;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${white};
    opacity: 0;
  }
  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    ${MAIN_BOX_SHADOW};
    &:after {
      opacity: 0.25;
    }
  }
  ${(props: Props) => {
  switch (props.variant) {
    case 'primary':
      return AppButtonPrimaryStyles
    case 'secondary':
      return AppButtonSecondaryStyles
    case 'spotify':
      return AppButtonSpotifyStyles
    default:
      return AppButtonPrimaryStyles
  }}}
`

export const IconInner = styled.div`
  width: ${ICON_SIZE.width}px;
  height: ${ICON_SIZE.height}px;
  & + ${AppButtonContentInner} {
    margin-left: 10px;
  }
`
