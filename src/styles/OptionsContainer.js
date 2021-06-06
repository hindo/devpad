import styled from 'styled-components'

export const OptionsContainer = styled.div`
  border-radius: 2px;
  background-color: aliceblue;
  position: absolute;
  width: 120px;
  right: calc(-120px + 10px);
  top: -5px;
  z-index: 10;
  display: ${props => props.visible ? 'block' : 'none'};
  text-align: left;
  box-shadow: 1px 0 2px rgba(0, 0, 0, .4);

  & ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  & li {
    padding: 7px 14px;
  }
`
