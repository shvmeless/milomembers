// IMPORTS
import { MEMBER_DESCRIPTIONS, type Member } from '../../../contexts/members/membersInterface'
import { NavigationContext } from '../../../contexts/navigation/navigationContext'
import { CommonContext } from '../../../contexts/common/commonContext'
import { classes } from '../../../utils/common'
import { copyRow } from '../../../utils/copy'
import css from './MembersRow.module.scss'
import { useContext } from 'react'

// CONST
const CELLS = Object.keys(MEMBER_DESCRIPTIONS).filter((cell) => (cell !== 'id')) as Array<keyof Member>

// COMPONENT
export default function MembersRow (props: {
  className?: string
  index: number
  member: Member
}): JSX.Element {

  // PROPS
  const { className, index, member } = props

  // CONTEXT
  const { lastCreatedMember, selectedMember, setSelectedMember } = useContext(CommonContext)
  const { setPath } = useContext(NavigationContext)

  // STYLE
  const styles = classes(
    css.MembersRow,
    (lastCreatedMember !== null && lastCreatedMember.id === member.id) && css.created,
    (selectedMember !== null && selectedMember.id === member.id) && css.selected,
    className,
  )

  // HANDLER
  const onRowClick = (): void => {
    setSelectedMember(member)
    setPath('edit')
  }

  // HANDLER
  const onCopyClick = (event: React.MouseEvent): void => {
    event.stopPropagation()
    copyRow(member)
  }

  // RETURN
  return <tr className={styles} onClick={onRowClick}>
    <td className={`${css.cell} ${css.copy}`} onClick={onCopyClick}>{index + 1}</td>
    {CELLS.map((cell, index) => <td className={css.cell} key={index}>{(() => {
      const value = member[cell]
      if (typeof value === 'boolean') return value ? 'Si' : 'No'
      if (value === '') return '-'
      return value
    })()
    }</td>)}
  </tr>

}
