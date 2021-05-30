import React, { useState } from 'react'
import { NewItemForm } from './NewItemForm'
import { AddItemButton } from '../styles'

export const AddNewItem = ({ toggleButtonText, dark = false, handleOnAdd }) => {
  const [showForm, setShowForm] = useState(false)
  if (showForm) {
    return (
      <NewItemForm
        handleOnAdd={text => {
          handleOnAdd(text)
          setShowForm(false)
        }}
      />
    )
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  )
}
