import React, { useRef, useState } from 'react'
import { useDrop } from 'react-dnd'
import { useAppState, MOVE_TASK, UPDATE_TASK, DELETE_TASK } from '../AppStateContext'
import { useItemDrag } from '../hooks'
import { CardContainer, OptionsWrapper, MarginContainer } from '../styles'
import { Options } from './Options'
import { NewItemForm } from './NewItemForm'

export const Card = ({ id, text, index, columnId }) => {
  const [showForm, setShowForm] = useState(false)
  const ref = useRef(null)
  const { dispatch } = useAppState()
  const { drag } = useItemDrag({ type: 'CARD', id, index, text, columnId })
  const [, drop] = useDrop({
    accept: 'CARD',
    hover (item) {
      if (item.id === id) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index
      const sourceColumn = item.columnId
      const targetColumn = columnId

      dispatch({
        type: MOVE_TASK,
        payload: { dragIndex, hoverIndex, sourceColumn, targetColumn }
      })

      item.index = hoverIndex
      item.columnId = targetColumn
    }
  })

  drag(drop(ref))

  const options = [
    { id: 1, name: 'Rename', action: () => setShowForm(true) },
    {
      id: 2,
      name: 'Delete',
      action: () =>
        dispatch({
          type: DELETE_TASK,
          payload: { index, columnId }
        })
    }
  ]

  const handleOnUpdate = (text) => {
    dispatch({
      type: UPDATE_TASK,
      payload: { index, columnId, text }
    })
  }

  if (showForm) {
    return (
      <MarginContainer>
        <NewItemForm
          defaultValue={text}
          primaryButton='Update'
          handleOnPrimary={text => {
            handleOnUpdate(text)
            setShowForm(false)
          }}
          handleOnSecondary={() => {
            setShowForm(false)
          }}
        />
      </MarginContainer>
    )
  }

  return (
    <OptionsWrapper>
      <CardContainer ref={ref}>
        {text}
        <Options menu={options} />
      </CardContainer>
    </OptionsWrapper>
  )
}
