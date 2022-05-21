import { createGlobalStyle } from 'styled-components'
import { colors } from '../const/colors'
import { fonts, fontSize } from '../const/fonts'

export const GlobalStyle = createGlobalStyle`

  &* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    font-family: ${fonts.regular};
    font-size: ${fontSize.regular};
  }

  body {
    background-color: ${colors.background.primary};
    color: ${colors.black};
  }
`
