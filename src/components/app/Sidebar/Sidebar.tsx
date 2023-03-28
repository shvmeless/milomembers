// IMPORTS
import { NavigationContext, PATHS } from '../../../contexts/navigation/navigationContext'
import { classes } from '../../../utils/common'
import css from './Sidebar.module.scss'
import { useContext } from 'react'
import Hr from '../../forms/Hr/Hr'

// COMPONENT
export default function Sidebar (props: {
  className?: string
}): JSX.Element {

  // PROPS
  const { className } = props

  // CONTEXT
  const { path } = useContext(NavigationContext)

  // RETURN
  return <div className={classes(css.Sidebar, className)}>

    <h1 className={css.title}>{PATHS[path].title}</h1>

    <Hr/>

    {PATHS[path].element}

  </div>

}
