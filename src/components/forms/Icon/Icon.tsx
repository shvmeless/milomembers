// IMPORTS
import { classes } from '../../../utils/common'
import css from './Icon.module.scss'

// ICONS
const ICONS = {
  back: <><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M5 12l14 0'></path><path d='M5 12l6 6'></path><path d='M5 12l6 -6'></path></>,
  add: <><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M12 5l0 14'></path><path d='M5 12l14 0'></path></>,
  edit: <><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4'></path><path d='M13.5 6.5l4 4'></path></>,
  delete: <><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M18 6l-12 12'></path><path d='M6 6l12 12'></path></>,
  upload: <><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2'></path><path d='M7 9l5 -5l5 5'></path><path d='M12 4l0 12'></path></>,
  download: <><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2'></path><path d='M7 11l5 5l5 -5'></path><path d='M12 4l0 12'></path></>,
}

// TYPE
export type IconName = keyof typeof ICONS

// COMPONENT
export default function Icon (props: {
  className?: string
  name: IconName
}): JSX.Element {

  // RETURN
  return <svg
    className={classes(css.Icon, props.className)}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
  >{ICONS[props.name]}</svg>

}
