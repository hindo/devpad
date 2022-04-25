import styled from 'styled-components'

export const ColorIcon = styled.input`
  opacity: 1;
  width: 18px;
  height: 18px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  &::after {
    content: ' ';
    display: inline-block;
    background-color: ${props => props.color ?? 'transparent'};
    padding: 2px;
    border: 2px solid white;
    border-radius: 50%;
    cursor: pointer;
    width: 18px;
    height: 18px;
  }

  &:checked {
    &::after {
      border: 2px solid white;
      box-shadow: 0 0 0 1px rgb(0 0 0 / 0.5);
    }
  }
`
