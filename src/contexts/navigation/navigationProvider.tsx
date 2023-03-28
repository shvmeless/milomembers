// IMPORTS
import { NavigationContext, useNavigation } from './navigationContext'
import { type ReactNode } from 'react'

// COMPONENT
export default function NavigationProvider (props: {
  children?: ReactNode
}): JSX.Element {

  // STATE
  const state = useNavigation()

  // RETURN
  return <NavigationContext.Provider value={state}>
    {props.children}
  </NavigationContext.Provider>

}
