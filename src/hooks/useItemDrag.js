import { useEffect } from 'react'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { useAppState, SET_DRAGGED_ITEM } from '../AppStateContext'

export const useItemDrag = (item) => {
  const { dispatch } = useAppState()
  const [{ isDragging }, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatch({ type: SET_DRAGGED_ITEM, payload: item })
      return item
    },
    end: () => dispatch({ type: SET_DRAGGED_ITEM, payload: undefined }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    })
  })

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { isDragging, drag }
}
