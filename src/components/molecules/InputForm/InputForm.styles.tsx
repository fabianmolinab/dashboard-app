import styled, { css } from 'styled-components'
import { colors } from '../../../const/colors'

interface Props {
  readonly signup?: boolean
  readonly valido?: string
}

const ContenedorInput = styled.div<Props>`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 15px;

  ${(props) =>
    props.signup &&
    css`
      align-items: center;
      label {
        width: 100%;
        margin-top: 15px;
      }
      input {
        width: 100%;
      }
  `}
`

const LabelInput = styled.label`
  display: block;
  width: 100%;
  font-weight: 700;
  margin-bottom: 3px;
  min-height: 20px;
  cursor: pointer;

  ${(props) => props.color === 'true' &&
    css`
      color: ${colors.darkGreen} !important
  `}
`

const TituloError = styled.p<Props>`
  display: none;
  width: 90%;
  color: ${colors.red};
  font-weight: 600;
  margin-top: 5px;

${(props) =>
    props.valido === 'true' &&
    css`
    display: none;
  `}
${(props) =>
    props.valido === 'false' &&
    css`
    display: block;
  `}
`
export { ContenedorInput, LabelInput, TituloError }
