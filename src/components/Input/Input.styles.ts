import styled, { css } from 'styled-components'
import { colors } from '../../const/colors'

interface InputStylesProps {
  readonly valido?: string
}

export const InputStyles = styled.input<InputStylesProps>`
  display: block;
  width: 85%;
  padding: 6px;
  border: 1.5px solid #000;
  border-radius: 8px;
  background-color: ${colors.white};

  /*La propiedad valido cambiar el color del borde del input*/
  ${(props) =>
    props.valido === 'true' &&
    css`
      border: 1.5px solid ${colors.green} !important;
    `}
  ${(props) =>
    props.valido === 'false' &&
    css`
      border: 1.5px solid ${colors.red} !important;
    `}
`
