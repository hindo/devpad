import { useDragLayer } from 'react-dnd'
import { Column } from './Column'
import { CustomDragLayerContainer } from '../styles/CustomDragLayerContainer'

const getItemStyles = (currentOffset) => {
  if (!currentOffset) {
    return {
      display: 'none'
    }
  }
  const { x, y } = currentOffset
  const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
    WebkitTransform: transform
  }
}

export const CustomDragLayer = () => {
  const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    currentOffset: monitor.getClientOffset(),
    isDragging: monitor.isDragging()
  }))

  if (!isDragging) {
    return null
  }

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        <Column
          id={item.id}
          title={item.title}
          index={item.index}
        />
      </div>
    </CustomDragLayerContainer>
  ) : null
}
