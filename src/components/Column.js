import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import { useAppState, ADD_TASK, MOVE_LIST, MOVE_TASK } from '../AppStateContext'
import { AddNewItem } from './AddNewItem'
import { Card } from './Card'
import { useItemDrag } from '../hooks'
import { ColumnTitle, ColumnContainer } from '../styles'

import { useAppConfig } from '../contexts/AppConfigContext'

export const Column = ({
  title = 'Default title',
  index,
  id,
  isPreview = false,
}) => {
  const { columnPadding, columnTitleSizeRatio } = useAppConfig()
  const ref = useRef(null)
  const { state, dispatch } = useAppState()
  const { isDragging, drag } = useItemDrag({ type: 'COLUMN', id, index, title })

  const [, drop] = useDrop({
    accept: ['COLUMN', 'CARD'],
    hover(item) {
      if (item.type === 'COLUMN') {
        const dragIndex = item.index
        const hoverIndex = index

        if (dragIndex === hoverIndex) {
          return
        }
        dispatch({ type: MOVE_LIST, payload: { dragIndex, hoverIndex } })
        item.index = hoverIndex
      } else {
        const dragIndex = item.index
        const hoverIndex = 0
        const sourceColumn = item.columnId
        const targetColumn = id

        if (sourceColumn === targetColumn) {
          return
        }

        dispatch({
          type: MOVE_TASK,
          payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
        })

        item.index = hoverIndex
        item.columnId = targetColumn
      }
    },
  })

  drag(drop(ref))

  return (
    <ColumnContainer
      ref={ref}
      isDragging={isDragging}
      columnPadding={columnPadding}
      isPreview={isPreview}
    >
      <ColumnTitle columnTitleSizeRatio={columnTitleSizeRatio}>
        {title}
      </ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card
          key={task.id}
          id={task.id}
          text={task.text}
          accentColor={task.accentColor}
          index={i}
          columnId={id}
        />
      ))}
      <AddNewItem
        toggleButtonText={
          state.lists[index].tasks.length ? '+ Add another task' : '+ Add task'
        }
        handleOnAdd={(text, accentColor) =>
          dispatch({
            type: ADD_TASK,
            payload: { text, accentColor, listId: id },
          })
        }
        dark
      />
    </ColumnContainer>
  )
}
