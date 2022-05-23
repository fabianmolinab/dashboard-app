import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../const/colors'
import { fontSize, fontWeigh } from '../../../const/fonts'

interface Props {
  onClick?: () => void
  name: string
  type: 'submit' | 'reset' | 'button'
}

export const Button: React.FC<Props> = ({ onClick, name, type }) => {
  return (
    <ButtonStyles onClick={onClick} type={type} >
      {name}
    </ButtonStyles>
  )
}

export const ButtonStyles = styled.button`
  display: inline-block;
  height: 48px;
  font-weight: ${fontWeigh.medium};
  font-size: ${fontSize.regular};
  background-color: ${colors.primaryColors.pBase};
  border-radius: 4px;
  border: none;
  color: ${colors.background.primary};
  cursor: pointer;
  padding: 0 24px; 

  &:hover {
    background-color: ${colors.primaryColors.p600};
    transition: all 0.2s ;
  }
`
