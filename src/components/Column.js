import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import { useAppState, ADD_TASK, MOVE_LIST } from '../AppStateContext'
import { AddNewItem } from './AddNewItem'
import { Card } from './Card'
import { useItemDrag } from '../hooks'
import { ColumnTitle, ColumnContainer } from '../styles'

export const Column = ({ title = 'Default title', index, id }) => {
  const { state, dispatch } = useAppState()
  const ref = useRef(null)
  const { isDragging, drag } = useItemDrag({ type: 'COLUMN', id, index, title })

  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover (item) {
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }
      dispatch({ type: MOVE_LIST, payload: { dragIndex, hoverIndex } })
      item.index = hoverIndex
    }
  })

  drag(drop(ref))

  return (
    <ColumnContainer ref={ref} isDragging={isDragging}>
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
