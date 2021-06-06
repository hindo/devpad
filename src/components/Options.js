import React, { useState } from 'react'

import { MenuContainer, OptionsButton, OptionsContainer } from '../styles'

export const Options = ({ menu = [] }) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = (state) => {
    setIsVisible(state ?? !isVisible)
  }

  return (
    <MenuContainer onMouseLeave={() => toggleVisibility(false)}>
      {menu.length && (
        <OptionsButton onClick={() => toggleVisibility()}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z' />
          </svg>
        </OptionsButton>
      )}
      <OptionsContainer visible={isVisible}>
        <ul>
          {menu.length && menu.map(item => (
            <li
              key={item.id}
              onClick={() => item.action()}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </OptionsContainer>
    </MenuContainer>
  )
}
