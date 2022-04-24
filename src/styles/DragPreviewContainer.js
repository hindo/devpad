import styled from 'styled-components'

export const DragPreviewContainer = styled.div`
  transform: ${props => (props.isPreview ? 'rotate(2deg)' : undefined)};
  opacity: ${props => props.isDragging ? '0.3' : '1'};
`
