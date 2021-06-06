import styled from 'styled-components'

const styles = {
  default: {
    background: '#ddd',
    text: '#333'
  },
  primary: {
    background: '#5aac44',
    text: '#fff'
  }
}

export const NewItemButton = styled.button`
  cursor: pointer;
  background-color: ${props => styles[props.styling]?.background || styles.default.background};
  color: ${props => styles[props.styling]?.text || styles.default.text};
  display: inline-block;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  padding: 6px 12px;
  text-align: center;
  margin-right: 2px;
`
