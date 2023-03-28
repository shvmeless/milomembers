// IMPORTS
import { classes } from '../../../utils/common'
import { type ReactNode } from 'react'
import css from './Label.module.scss'

// COMPONENT
export default function Label (props: {
  text: string
  children?: ReactNode
  className?: string
}): JSX.Element {

  // PROPS
  const { text, children } = props
  const className = props.className ?? ''

  // RETURN
  return <div className={classes(css.Label, className)}>
    <label className={css.text}>{text}</label>
    {children}
  </div>

}
