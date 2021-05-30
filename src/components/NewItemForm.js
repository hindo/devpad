import React, { useState } from 'react'
import { useFocus } from '../hooks'
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles'

export const NewItemForm = ({onAdd = () => {}}) => {
  const [text, setText] = useState('')
  const inputRef = useFocus()

  return (
    <NewItemFormContainer>
      <NewItemInput ref={inputRef} value={text} onChange={e => setText(e.target.value)} />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  )
}