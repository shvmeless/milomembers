// IMPORTS
import { NavigationContext } from './contexts/navigation/navigationContext'
import MembersTable from './components/members/MembersTable/MembersTable'
import Navigation from './components/app/Navigation/Navigation'
import Sidebar from './components/app/Sidebar/Sidebar'
import css from './App.module.scss'
import { useContext } from 'react'

// COMPONENT
export default function App (): JSX.Element {

  // CONTEXT
  const { path } = useContext(NavigationContext)

  // RENDER
  return <div className={css.App}>

    <div className={css.Navigation}>
      <Navigation/>
    </div>

    {path !== 'home' && <aside className={css.Sidebar}>
      <Sidebar/>
    </aside>}

    <section className={css.Body}>
      <MembersTable/>
    </section>

  </div>

}
