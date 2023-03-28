// IMPORTS
import { type Member, MEMBER_DESCRIPTIONS } from '../../../contexts/members/membersInterface'
import { MemberContext } from '../../../contexts/members/membersContext'
import MembersRow from '../MembersRow/MembersRow'
import { copyColumn, copyTable } from '../../../utils/copy'
import { classes } from '../../../utils/common'
import css from './MembersTable.module.scss'
import { useContext } from 'react'

// CONST
const HEADERS = Object.entries(MEMBER_DESCRIPTIONS).filter(([key]) => (key !== 'id')) as Array<[keyof Member, string]>

// COMPONENT
export default function MembersTable (props: {
  className?: string
}): JSX.Element {

  // PROPS
  const { className } = props

  // CONTEXT
  const { members } = useContext(MemberContext)

  // HANDLER
  const onClick = (column: keyof Member): void => {
    copyColumn(members, column)
  }

  // HANDLER
  const onCopyAllClick = (): void => {
    copyTable(members)
  }

  // RETURN
  return <table className={classes(css.MembersTable, className)}>

    {/* HEAD */}
    <thead className={css.header}>
      <tr className={css.headerRow}>
        <th className={css.headerCell} onClick={onCopyAllClick}>#</th>
        {HEADERS.map(([key, value], index) => <th className={css.headerCell} key={index} onClick={() => { onClick(key) }}>
          {value}
        </th>)}
      </tr>
    </thead>

    {/* BODY */}
    <tbody className={css.body}>
      {members.map((member, index) => <MembersRow className={css.row} index={index} key={index} member={member}/>)}
    </tbody>

  </table>

}
