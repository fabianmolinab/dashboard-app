import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../../../const/colors'
import { fontSize, fontWeigh } from '../../../const/fonts'

interface Props {
  onClick?: () => void
  name: string
  type: 'submit' | 'reset' | 'button'
  small?: boolean
  large?: boolean
}

export const Button: React.FC<Props> = ({ onClick, name, type, small, large }) => {
  return (
    <ButtonStyles onClick={onClick} type={type} small={small} large={large}>
      {name}
    </ButtonStyles>
  )
}

interface ButtonStylesType {
  readonly small?: boolean
  readonly large?: boolean
}

export const ButtonStyles = styled.button<ButtonStylesType>`
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

  ${props => props.small && css`
    font-size: 0.875rem;
    height: 32px;
  `}

  ${props => props.large && css`
    height: 56px; 
  `}

`
