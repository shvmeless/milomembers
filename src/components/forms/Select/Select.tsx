// IMPORTS
import { classes } from '../../../utils/common'
import css from './Select.module.scss'

// COMPONENT
export default function Select <T extends string> (props: {
  callback: (value: T) => void
  choices: T[]
  value: T
  className?: string
  disabled?: boolean
  error?: boolean
}): JSX.Element {

  // PROPS
  const { callback, choices, value } = props
  const className = props.className ?? ''
  const disabled = props.disabled ?? false
  const error = props.error ?? false

  // HANDLER
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value as T
    callback(value)
  }

  // STYLES
  const styles = classes(
    css.Select,
    disabled ? css.disabled : error ? css.error : css.default,
    className,
  )

  // RENDER
  return <select className={styles}
    onChange={onChange}
    value={value}
    disabled={disabled}
  >

    {choices.map((choice, index) => <option key={index} value={choice}>{choice}</option>)}

  </select>

}
