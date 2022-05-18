import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../../../const/colors'

interface Props {
  onClick?: () => void
  name: string
  type: 'submit' | 'reset' | 'button'
  largeV?: boolean
}

export const Button: React.FC<Props> = ({ onClick, name, type, largeV }) => {
  return (
    <BottonStyles onClick={onClick} type={type} largeV={largeV}>
      {name}
    </BottonStyles>
  )
}

interface BottonStylesProps {
  largeV?: boolean
}

export const BottonStyles = styled.button<BottonStylesProps>`
  width: 150px;
  height: 40px;
  margin-left: 20px;
  font-weight: 700;
  background: ${colors.green};
  border: 1.5px solid ${colors.green};
  cursor: pointer;
  color: ${colors.black};
  transition: all 0.4s;
  border-radius: 8px;

  &:hover {
    font-weight: 700;
    //border-width: medium;
    transform: scale(1.1, 1.1);
  }

  ${(props) =>
    props.largeV &&
    css`
      width: 200px;
      margin: 10px auto;
      background: ${colors.white};
      color: ${colors.white};
    `}
`
