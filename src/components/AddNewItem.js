import React, { useState } from 'react'
import { NewItemForm } from './NewItemForm'
import { AddItemButton } from '../styles'

export const AddNewItem = ({ toggleButtonText, dark = false, handleOnAdd }) => {
  const [showForm, setShowForm] = useState(false)
  if (showForm) {
    return (
      <NewItemForm
        handleOnPrimary={text => {
          if (text.length) {
            handleOnAdd(text)
          }
          setShowForm(false)
        }}
        handleOnSecondary={() => {
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
