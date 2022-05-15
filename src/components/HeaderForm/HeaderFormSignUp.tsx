import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  content: string
  marginB30: boolean
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
  text-align: center;
  box-sizing: border-box;

  ${(props) =>
    props.marginB_30 &&
    css`
      margin-bottom: 30px;
    `}
`
