import React, { useState } from 'react'
import { useFocus } from '../hooks'
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles'

export const NewItemForm = ({ defaultValue = '', primaryButton = 'Create', secondaryButton = 'Cancel', handleOnPrimary, handleOnSecondary }) => {
  const [text, setText] = useState(defaultValue)
  const inputRef = useFocus()

  const handleAddText = (event) => {
    if (event.key === 'Enter') {
      handleOnPrimary(text)
    }
    if (event.key === 'Escape') {
      handleOnSecondary()
    }
  }

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleAddText}
      />
      <div>
        <NewItemButton styling='primary' onClick={() => handleOnPrimary(text)}>{primaryButton}</NewItemButton>
        <NewItemButton onClick={() => handleOnSecondary()}>{secondaryButton}</NewItemButton>
      </div>
    </NewItemFormContainer>
  )
}
