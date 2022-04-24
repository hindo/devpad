import React, { useState } from 'react'
import { useFocus } from '../hooks'
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles'
import { ColorIcons } from './ColorIcons'

export const NewItemForm = ({
  defaultValue = '',
  defaultColor = 'white',
  primaryButton = 'Create',
  secondaryButton = 'Cancel',
  accentColors,
  handleOnPrimary,
  handleOnSecondary,
}) => {
  const [text, setText] = useState(defaultValue)
  const [color, setColor] = useState(defaultColor)
  const inputRef = useFocus()

  const handleAddText = event => {
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
      {accentColors ? (
        <ColorIcons selected={color} onChange={color => setColor(color)} />
      ) : null}
      <div>
        <NewItemButton
          styling="primary"
          onClick={() => handleOnPrimary(text, color)}
        >
          {primaryButton}
        </NewItemButton>
        <NewItemButton onClick={() => handleOnSecondary()}>
          {secondaryButton}
        </NewItemButton>
      </div>
    </NewItemFormContainer>
  )
}
