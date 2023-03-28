// IMPORTS
import { classes } from '../../../utils/common'
import css from './Hr.module.scss'

// COMPONENT
export default function Hr (props: {
  className?: string
}): JSX.Element {

  // PROPS
  const { className } = props

  // RETURN
  return <div className={classes(css.Hr, className)}>
  </div>

}
