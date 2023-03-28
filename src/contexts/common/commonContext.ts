// IMPORTS
import { createContext, useState } from 'react'
import { type Member } from '../members/membersInterface'

// INTERFACE
export interface CommonContextType {
  lastCreatedMember: Member | null
  setLastCreatedMember: (member: Member | null) => void
  selectedMember: Member | null
  setSelectedMember: (member: Member | null) => void
}

// HOOK
export const useCommon = (): CommonContextType => {

  // STATE
  const [lastCreatedMember, setLastCreatedMember] = useState<Member | null>(null)
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  // RETURN
  return { lastCreatedMember, setLastCreatedMember, selectedMember, setSelectedMember }

}

// CONTEXT
export const CommonContext = createContext<CommonContextType>({
  lastCreatedMember: null,
  setLastCreatedMember: () => {},
  selectedMember: null,
  setSelectedMember: () => {},
})
