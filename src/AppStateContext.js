import React, { useEffect, createContext, useReducer, useContext } from 'react'
import { nanoid } from 'nanoid'
import {
  findItemIndexById,
  overrideItemAtIndex,
  moveItem,
  insertItemAtIndex,
  removeItemAtIndex,
} from './utils/arrayUtils'

const AppStateContext = createContext({})

export const useAppState = () => {
  return useContext(AppStateContext)
}

export const SET_STORE = 'SET_STORE'
export const ADD_LIST = 'ADD_LIST'
export const ADD_TASK = 'ADD_TASK'
export const MOVE_LIST = 'MOVE_LIST'
export const MOVE_TASK = 'MOVE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const SET_DRAGGED_ITEM = 'SET_DRAGGED_ITEM'

const appStateReducer = (state, action) => {
  switch (action.type) {
    case SET_STORE: {
      return { lists: [...action.payload] }
    }
    case ADD_LIST: {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: nanoid(), title: action.payload, tasks: [] },
        ],
      }
    }
    case ADD_TASK: {
      const { text, accentColor } = action.payload
      const targetListIndex = findItemIndexById(
        state.lists,
        action.payload.listId
      )
      const targetList = state.lists[targetListIndex]
      const updatedTargetList = {
        ...targetList,
        tasks: [
          ...targetList.tasks,
          {
            id: nanoid(),
            text,
            accentColor,
          },
        ],
      }

      return {
        ...state,
        lists: overrideItemAtIndex(
          state.lists,
          updatedTargetList,
          targetListIndex
        ),
      }
    }
    case MOVE_LIST: {
      const { dragIndex, hoverIndex } = action.payload
      return {
        ...state,
        lists: moveItem(state.lists, dragIndex, hoverIndex),
      }
    }
    case MOVE_TASK: {
      const { dragIndex, hoverIndex, sourceColumn, targetColumn } =
        action.payload

      const sourceListIndex = findItemIndexById(state.lists, sourceColumn)

      const targetListIndex = findItemIndexById(state.lists, targetColumn)
      const sourceList = state.lists[sourceListIndex]
      const task = sourceList.tasks[dragIndex]
      const updatedSourceList = {
        ...sourceList,
        tasks: removeItemAtIndex(sourceList.tasks, dragIndex),
      }
      const stateWithUpdatedSourceList = {
        ...state,
        lists: overrideItemAtIndex(
          state.lists,
          updatedSourceList,
          sourceListIndex
        ),
      }

      const targetList = stateWithUpdatedSourceList.lists[targetListIndex]
      const updatedTargetList = {
        ...targetList,
        tasks: insertItemAtIndex(targetList.tasks, task, hoverIndex),
      }

      return {
        ...stateWithUpdatedSourceList,
        lists: overrideItemAtIndex(
          stateWithUpdatedSourceList.lists,
          updatedTargetList,
          targetListIndex
        ),
      }
    }
    case UPDATE_TASK: {
      const { index, columnId, text, accentColor } = action.payload
      const sourceListIndex = findItemIndexById(state.lists, columnId)
      const sourceList = state.lists[sourceListIndex]
      const sourceTask = findItemIndexById(sourceList.tasks, index)
      const updatedTask = {
        ...sourceTask,
        text,
        accentColor,
      }
      const updatedSourceList = {
        ...sourceList,
        tasks: overrideItemAtIndex(sourceList.tasks, updatedTask, index),
      }

      return {
        ...state,
        lists: overrideItemAtIndex(
          state.lists,
          updatedSourceList,
          sourceListIndex
        ),
      }
    }
    case DELETE_TASK: {
      const { index, columnId } = action.payload
      const sourceListIndex = findItemIndexById(state.lists, columnId)
      const sourceList = state.lists[sourceListIndex]
      const updatedSourceList = {
        ...sourceList,
        tasks: removeItemAtIndex(sourceList.tasks, index),
      }

      return {
        ...state,
        lists: overrideItemAtIndex(
          state.lists,
          updatedSourceList,
          sourceListIndex
        ),
      }
    }
    case SET_DRAGGED_ITEM: {
      return { ...state, draggedItem: action.payload }
    }
    default: {
      return state
    }
  }
}

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, { lists: [] })

  useEffect(() => {
    const strLists = window.localStorage.getItem('lists') || '[]'
    dispatch({
      type: SET_STORE,
      payload: JSON.parse(strLists),
    })
  }, [])

  useEffect(() => {
    if (state.lists) {
      window.localStorage.setItem('lists', JSON.stringify(state.lists))
    }
  }, [state])

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}
