// IMPORTS
import { MemberContext, useMember } from './membersContext'
import { type ReactNode } from 'react'

// COMPONENT
export default function MembersProvider (props: {
  children?: ReactNode
}): JSX.Element {

  // STATE
  const state = useMember()

  // RETURN
  return <MemberContext.Provider value={state}>
    {props.children}
  </MemberContext.Provider>

}
