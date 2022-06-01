import styled, { css } from 'styled-components'
import { colors } from '../../../const/colors'

interface InputStylesProps {
  readonly valido?: string
}

export const InputStyles = styled.input<InputStylesProps>`
  width: 60%;
  padding: 6px;
  border: 1px solid ${colors.greysColors.grey500};
  border-radius: 4px;

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
