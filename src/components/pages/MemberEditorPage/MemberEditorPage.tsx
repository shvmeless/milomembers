// IMPORTS
import MemberEditorForm from '../../members/MemberEditorForm/MemberEditorForm'
import { CommonContext } from '../../../contexts/common/commonContext'
import css from './MemberEditorPage.module.scss'
import { classes } from '../../../utils/common'
import { useContext } from 'react'

// COMPONENT
export default function MemberEditorPage (props: {
  className?: string
}): JSX.Element {

  // PROPS
  const { className } = props

  // CONTEXT
  const { selectedMember } = useContext(CommonContext)

  // RETURN
  return <div className={classes(css.MemberEditorPage, className)}>

    {selectedMember !== null && <MemberEditorForm member={selectedMember} />}

  </div>

}
