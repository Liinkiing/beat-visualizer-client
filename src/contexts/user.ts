import * as React from 'react'
import {ViewerQueryViewer} from 'graphql/components'

export const CurrentUserContext = React.createContext<ViewerQueryViewer | null>(null)

export const useCurrentUser = () => React.useContext(CurrentUserContext)
