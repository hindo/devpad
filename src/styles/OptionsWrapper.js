import styled from 'styled-components'
import { CardContainer } from './CardContainer'
import { MenuContainer } from './MenuContainer'

export const OptionsWrapper = styled.div`
  ${CardContainer} {
    position: relative;
    min-height: 40px;
  }

  ${MenuContainer} {
    position: absolute;
    display: none;
    top: calc(50% - 12px);
    right: -12px;
  }

  &:hover ${MenuContainer} {
    display: block;
  }
`
