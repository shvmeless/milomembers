// IMPORTS
import NavigationProvider from './contexts/navigation/navigationProvider'
import MembersProvider from './contexts/members/membersProvider'
import CommonProvider from './contexts/common/commonProvider'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.scss'

// REACT
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CommonProvider>
      <MembersProvider>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </MembersProvider>
    </CommonProvider>
  </React.StrictMode>,
)
