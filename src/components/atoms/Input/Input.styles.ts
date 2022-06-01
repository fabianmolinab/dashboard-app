import styled, { css } from 'styled-components'
import { colors } from '../../../const/colors'

interface InputStylesProps {
  readonly valido?: string
}

export const InputStyles = styled.input<InputStylesProps>`
  width: 60%;
  font-size: 1rem;
  padding: 10px 8px;
  border: 1px solid ${colors.greysColors.grey500};
  border-radius: 4px;

  &:hover {
    border-color: ${colors.primaryColors.pBase}
  }

  &:active {
    border-color: ${colors.primaryColors.p600}
  }

  /*La propiedad valido cambiar el color del borde del input*/
  ${(props) =>
    props.valido === 'true' &&
    css`
      border: 1.5px solid ${colors.succesColors.s500} !important;
    `}
  ${(props) =>
    props.valido === 'false' &&
    css`
      border: 1.5px solid ${colors.dangerColors.d500} !important;
    `}
`
