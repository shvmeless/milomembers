// IMPORTS
import { classes } from '../../../utils/common'
import css from './Submit.module.scss'

// COMPONENT
export default function Submit (props: {
  text: string
  className?: string
}): JSX.Element {

  // PROPS
  const { text, className } = props

  // RETURN
  return <button className={classes(css.Submit, className)} type='submit'>
    {text}
  </button>

}
