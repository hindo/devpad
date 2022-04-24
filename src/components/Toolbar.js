import React from 'react'
import {
  ToolbarContainer,
  Brand,
  ToolbarButtons,
  ToolbarButton,
} from '../styles'
import { GoSettings } from 'react-icons/go'

export const Toolbar = () => {
  return (
    <ToolbarContainer>
      <Brand>
        dev<strong>PAD</strong>
      </Brand>
      <ToolbarButtons>
        <ToolbarButton>
          <GoSettings title="Settings" />
        </ToolbarButton>
      </ToolbarButtons>
    </ToolbarContainer>
  )
}
