import React, { useState } from 'react'
import { useFocus } from '../hooks'
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles'

export const NewItemForm = ({ handleOnAdd }) => {
  const [text, setText] = useState('')
  const inputRef = useFocus()

  const handleAddText = (event) => {
    if (event.key === 'Enter') {
      handleOnAdd(text)
    }
  }

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={() => handleOnAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  )
}
