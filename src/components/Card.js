import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import { useAppState, MOVE_TASK } from '../AppStateContext'
import { useItemDrag } from '../hooks'
import { CardContainer } from '../styles'

export const Card = ({ id, text, index, columnId }) => {
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

  return (
    <CardContainer ref={ref}>{text}</CardContainer>
  )
}
