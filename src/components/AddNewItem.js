import React, { useState } from 'react'
import { NewItemForm } from './NewItemForm'
import { AddItemButton } from '../styles'

export const AddNewItem = ({
  toggleButtonText,
  dark = false,
  accentColors = true,
  handleOnAdd,
}) => {
  const [showForm, setShowForm] = useState(false)
  if (showForm) {
    return (
      <>
        <NewItemForm
          accentColors={accentColors}
          handleOnPrimary={(text, accentColor) => {
            if (text.length) {
              handleOnAdd(text, accentColor)
            }
            setShowForm(false)
          }}
          handleOnSecondary={() => {
            setShowForm(false)
          }}
        />
      </>
    )
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  )
}
