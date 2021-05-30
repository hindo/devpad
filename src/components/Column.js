import React from 'react'
import { AddNewItem } from './AddNewItem'
import { ColumnTitle, ColumnContainer } from '../styles'

export const Column = ({title = 'Default title', children}) => {
  return(
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  )
}