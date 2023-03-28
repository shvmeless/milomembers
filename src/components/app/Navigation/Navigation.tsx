// IMPORTS
import { NavigationContext } from '../../../contexts/navigation/navigationContext'
import { classes } from '../../../utils/common'
import css from './Navigation.module.scss'
import NavButton from './NavButton'
import { useContext } from 'react'
import { CommonContext } from '../../../contexts/common/commonContext'

// COMPONENT
export default function Navigation (props: {
  className?: string
}): JSX.Element {

  // PROPS
  const { className } = props

  // CONTEXT
  const { path, setPath } = useContext(NavigationContext)
  const { setSelectedMember } = useContext(CommonContext)

  // RETURN
  return <div className={classes(css.Navigation, className)}>

    {path !== 'home' && <NavButton icon='back' callback={() => { setPath('home'); setSelectedMember(null) }} />}
    <NavButton icon='add' callback={() => { setPath('create'); setSelectedMember(null) }} />

  </div>

}
