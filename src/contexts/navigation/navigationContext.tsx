// IMPORTS
import MemberCreatorPage from '../../components/pages/MemberCreatorPage/MemberCreatorPage'
import MemberEditorPage from '../../components/pages/MemberEditorPage/MemberEditorPage'
import { createContext, useState } from 'react'

// PATHS
export const PATHS = {
  home: {
    title: 'Inicio',
    element: <></>,
  },
  create: {
    title: 'Agregar nuevo registro',
    element: <MemberCreatorPage/>,
  },
  edit: {
    title: 'Editar Registro',
    element: <MemberEditorPage/>,
  },
}

// INTERFACE
export interface NavigationContextType {
  path: keyof typeof PATHS
  setPath: (path: keyof typeof PATHS) => void
}

// HOOK
export const useNavigation = (): NavigationContextType => {

  // STATE
  const [path, setPath] = useState<keyof typeof PATHS>('create')

  // RETURN
  return { path, setPath }

}

// CONTEXT
export const NavigationContext = createContext<NavigationContextType>({
  path: 'create',
  setPath: () => {},
})
