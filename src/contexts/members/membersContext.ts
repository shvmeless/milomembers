// IMPORTS
import { membersDatabase } from './membersDatabase'
import { type Member } from './membersInterface'
import { createContext, useState } from 'react'

// INTERFACE
export interface MemberContextType {
  members: Member[]
  addMember: (member: Member) => void
  removeMember: (id: string) => void
  updateMember: (member: Member) => void
}

// HOOK
export const useMember = (): MemberContextType => {

  // STATE
  const [members, setMembers] = useState<Member[]>(membersDatabase.read())

  // FUNCTION
  const addMember = (member: Member): void => {
    member = { ...member }
    setMembers((prev) => {
      prev = [...prev]

      if (member.id !== undefined) {
        const exists = prev.some((b) => (b.id === member.id))
        if (exists) throw new Error(`The member with id '${member.id}' already exists.`)
      }

      prev.push(member)
      membersDatabase.write(prev)
      return prev

    })
  }

  // FUNCTION
  const removeMember = (id: string): void => {
    setMembers((prev) => {
      prev = [...prev]

      const exists = prev.some((b) => (b.id === id))
      if (!exists) throw new Error(`The member with id '${id}' does not exist.`)

      prev = prev.filter((b) => (b.id !== id))
      membersDatabase.write(prev)
      return prev

    })
  }

  // FUNCTION
  const updateMember = (member: Member): void => {
    member = { ...member }
    setMembers((prev) => {
      prev = [...prev]

      if (member.id === undefined) throw new Error('The member does not have an id.')

      const found = prev.find((b) => (b.id === member.id))
      if (found === undefined) throw new Error(`The member with id '${member.id}' does not exist.`)

      prev = prev.map((b) => (b.id === member.id ? member : b))
      membersDatabase.write(prev)
      return prev

    })
  }

  // RETURN
  return { members, addMember, removeMember, updateMember }

}

// CONTEXT
export const MemberContext = createContext<MemberContextType>({
  members: [],
  addMember: () => {},
  removeMember: () => {},
  updateMember: () => {},
})
