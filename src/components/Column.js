import React from 'react'
import { ColumnTitle, ColumnContainer } from '../styles'

export const Column = ({title = 'Default title', children}) => {
  return(
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
    </ColumnContainer>
  )
}