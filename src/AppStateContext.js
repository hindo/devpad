import React, { createContext, useReducer, useContext } from 'react'
import { nanoid } from 'nanoid'
import { findItemIndexById, overideItemAtIndex } from './utils/arrayUtils'

export const appData = {
  lists: [
    {
      id: '0',
      title: 'To Do',
      tasks: [
        { id: 'c0', text: 'Generate app scaffold' }
      ]
    },
    {
      id: '1',
      title: 'In Progress',
      tasks: [
        { id: 'c2', text: 'Learn Typescript' }
      ]
    },
    {
      id: '2',
      title: 'Done',
      tasks: [
        { id: 'c3', text: 'Begin to use static types' }
      ]
    }
  ]
}

const AppStateContext = createContext()

export const useAppState = () => {
  return useContext(AppStateContext)
}

export const ADD_LIST = 'ADD_LIST'
export const ADD_TASK = 'ADD_TASK'

const appStateReducer = (state, action) => {
  switch (action.type) {
    case ADD_LIST: {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: nanoid(), title: action.payload, tasks: [] }
        ]
      }
    }
    case ADD_TASK: {
      const targetListIndex = findItemIndexById(state.lists, action.payload.listId)
      const targetList = state.lists[targetListIndex]
      const updatedTargetList = {
        ...targetList,
        tasks: [
          ...targetList.tasks,
          { id: nanoid(), text: action.payload.text }
        ]
      }

      return {
        ...state,
        lists: overideItemAtIndex(state.lists, updatedTargetList, targetListIndex)
      }
    }
    default: {
      return state
    }
  }
}

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, appData)
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}
