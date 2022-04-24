import { useDragLayer } from 'react-dnd'
import { Column } from './Column'
import { Card } from './Card'
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

  return isDragging
    ? (
      <CustomDragLayerContainer>
        <div style={getItemStyles(currentOffset)}>
          {item.type === 'COLUMN'
            ? (
              <Column
                id={item.id}
                title={item.title}
                index={item.index}
                isPreview
              />
              )
            : (
              <Card
                columnId={item.columnId}
                index={0}
                id={item.id}
                text={item.text}
              />
              )}
        </div>
      </CustomDragLayerContainer>
      )
    : null
}
