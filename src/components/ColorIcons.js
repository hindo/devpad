import React from 'react'
import { ColorIcon, ColorIconsBar } from '../styles'

const colors = [
  'tomato',
  'coral',
  'gold',
  'limegreen',
  'dodgerblue',
  'violet',
  'white',
]

export const ColorIcons = ({ selected, onChange }) => {
  return (
    <ColorIconsBar>
      {colors.map((color, idx) => (
        <ColorIcon
          key={idx}
          type="radio"
          name="color"
          checked={selected === color}
          onChange={() => onChange(color)}
          color={color}
        />
      ))}
    </ColorIconsBar>
  )
}
