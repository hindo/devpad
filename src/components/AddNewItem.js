import React, { useState } from 'react'
import { NewItemForm } from './NewItemForm'
import { AddItemButton } from '../styles'

export const AddNewItem = ({toggleButtonText, dark = false, onAdd = () => {}}) => {
  const [showForm, setShowForm] = useState(false)
  if (showForm) {
    return (
      <NewItemForm
        onAdd={text => {
          onAdd(text)
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