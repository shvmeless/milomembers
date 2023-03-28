// IMPORTS
import Icon, { type IconName } from '../../forms/Icon/Icon'
import { classes } from '../../../utils/common'
import css from './NavButton.module.scss'

// COMPONENT
export default function NavButton (props: {
  className?: string
  callback: () => void
  icon: IconName
}): JSX.Element {

  // PROPS
  const { className, callback, icon } = props

  // RETURN
  return <button className={classes(css.NavButton, className)} type='button' onClick={callback}>
    <Icon className={css.Icon} name={icon} />
  </button>

}
