import React from 'react'
import {AppButtonContentInner, AppButtonInner, IconInner} from './styled'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly icon?: React.FC | React.ComponentType
  readonly variant?: 'primary' | 'secondary' | 'spotify',
}

const AppButton: React.FC<Props> = (props) => {
  const { children, icon: Icon } = props
  return (
    <AppButtonInner {...props}>
      {Icon && <IconInner children={<Icon/>}/>}
      <AppButtonContentInner children={children}/>
    </AppButtonInner>
  )
}

AppButton.defaultProps = {
  variant: 'primary'
}

export default AppButton
