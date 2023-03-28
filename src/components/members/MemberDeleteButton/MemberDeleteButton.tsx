// IMPORTS
import { NavigationContext } from '../../../contexts/navigation/navigationContext'
import { MemberContext } from '../../../contexts/members/membersContext'
import { type Member } from '../../../contexts/members/membersInterface'
import { CommonContext } from '../../../contexts/common/commonContext'
import css from './MemberDeleteButton.module.scss'
import { classes } from '../../../utils/common'
import { useContext } from 'react'

// COMPONENT
export default function MemberDeleteButton (props: {
  member: Member
  className?: string
}): JSX.Element {

  // PROPS
  const { member, className } = props

  // CONTEXT
  const { removeMember } = useContext(MemberContext)
  const { setSelectedMember } = useContext(CommonContext)
  const { setPath } = useContext(NavigationContext)

  // HANDLER
  const onClick = (): void => {
    if (member.id === undefined) return
    removeMember(member.id)
    setSelectedMember(null)
    setPath('home')
  }

  // RETURN
  return <button className={classes(css.MemberDeleteButton, className)} type='button' onClick={onClick}>
    Eliminar
  </button>

}
