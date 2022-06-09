import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../../../const/colors'

interface Props {
  content: string
  marginB30?: boolean
}

export const HeaderFormSignUp: React.FC<Props> = ({ content, marginB30 }) => {
  return (
    <Header marginB_30={marginB30}>
      <h2>{content} </h2>
    </Header>
  )
}

type HeaderProps = {
  readonly marginB_30?: boolean
}

const Header = styled.header<HeaderProps>`
  color: ${colors.primaryColors.pBase};
  text-align: center;
  box-sizing: border-box;

  ${(props) =>
    props.marginB_30 &&
    css`
      margin-bottom: 30px;
    `}
`
