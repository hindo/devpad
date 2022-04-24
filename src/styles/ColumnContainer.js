import styled from 'styled-components'
import { DragPreviewContainer } from './DragPreviewContainer'

export const ColumnContainer = styled(DragPreviewContainer)`
  background-color: ${props => props.dummy ? 'none' : '#ebecf0'};
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: ${props => props.columnPadding};
  flex-grow: 0;
  flex-shrink: 0;
`
