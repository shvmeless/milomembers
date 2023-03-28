// IMPORTS
import { classes } from '../../../utils/common'
import css from './Input.module.scss'

// COMPONENT
export default function Input (props: {
  callback: (value: string) => void
  value: string
  className?: string
  disabled?: boolean
  error?: boolean
  placeholder?: string
}): JSX.Element {

  // PROPS
  const { callback, value } = props
  const className = props.className ?? ''
  const disabled = props.disabled ?? false
  const error = props.error ?? false
  const placeholder = props.placeholder ?? ''

  // STYLES
  const styles = classes(
    css.Input,
    disabled ? css.disabled : error ? css.error : css.default,
    className,
  )

  // RENDER
  return <input className={styles}
    disabled={disabled}
    placeholder={placeholder}
    type='text'
    autoComplete='off'
    value={value}
    onChange={(e) => { callback(e.target.value.replace(/^[ ]/, '').replace(/[ ]+/g, ' ')) }}
  />

}
