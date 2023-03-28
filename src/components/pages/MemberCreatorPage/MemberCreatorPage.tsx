// IMPORTS
import MemberCreatorForm from '../../members/MemberCreatorForm/MemberCreatorForm'
import css from './MemberCreatorPage.module.scss'
import { classes } from '../../../utils/common'

// COMPONENT
export default function MemberCreatorPage (props: {
  className?: string
}): JSX.Element {

  // PROPS
  const { className } = props

  // RETURN
  return <div className={classes(css.MemberCreatorPage, className)}>
    <MemberCreatorForm/>
  </div>

}
