import { createContext, useContext } from 'react'

const initialState = {
  columnTitleSizeRatio: 1,
  columnPadding: '8px'
}

const AppConfigContext = createContext(initialState)
export const AppConfigProvider = ({ children }) => {
  return (
    <AppConfigContext.Provider value={initialState}>
      {children}
    </AppConfigContext.Provider>
  )
}

export const useAppConfig = () => {
  const context = useContext(AppConfigContext)
  if (context === undefined) {
    throw new Error('useAppConfig must be used within a ContextProvider')
  }
  return context
}
