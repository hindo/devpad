import React from 'react'
import { useAppState, ADD_TASK } from '../AppStateContext'
import { AddNewItem } from './AddNewItem'
import { Card } from './Card'
import { ColumnTitle, ColumnContainer } from '../styles'

export const Column = ({ title = 'Default title', index, id }) => {
  const { state, dispatch } = useAppState()
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {state.lists[index].tasks.map(task => (
        <Card key={task.id}>{task.text}</Card>
      ))}
      <AddNewItem
        toggleButtonText='+ Add another task'
        handleOnAdd={text => dispatch({ type: ADD_TASK, payload: { text, listId: id } })}
        dark
      />
    </ColumnContainer>
  )
}
