// IMPORTS
import { CommonContext, useCommon } from './commonContext'
import { type ReactNode } from 'react'

// COMPONENT
export default function CommonProvider (props: {
  children?: ReactNode
}): JSX.Element {

  // STATE
  const state = useCommon()

  // RETURN
  return <CommonContext.Provider value={state}>
    {props.children}
  </CommonContext.Provider>

}
