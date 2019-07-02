import React from 'react'
import {AppButtonContentInner, AppButtonInner, IconInner} from './styled'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly icon?: React.FC | React.ComponentType,
  readonly iconSize?: number,
  readonly variant?: 'primary' | 'secondary' | 'spotify',
}

const AppButton: React.FC<Props> = (props) => {
  const { children, icon: Icon, iconSize } = props
  return (
    <AppButtonInner {...props}>
      {Icon && <IconInner children={<Icon/>} iconSize={iconSize!}/>}
      {children && <AppButtonContentInner children={children}/>}
    </AppButtonInner>
  )
}

AppButton.defaultProps = {
  variant: 'primary',
  iconSize: 32
}

export default AppButton
