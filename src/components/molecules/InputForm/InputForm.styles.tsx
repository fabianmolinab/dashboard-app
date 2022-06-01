import styled, { css } from 'styled-components'
import { colors } from '../../../const/colors'

interface Props {
  readonly signup?: boolean
  readonly valido?: string
  readonly color: string
}

const ContenedorInput = styled.div<Props>`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 1rem;
  align-items: center;
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

const LabelInput = styled.label<Props>`
  width: 60%;
  font-weight: 500;
  margin: 3px;
  min-height: 20px;

  ${(props) => props.color === 'true' &&
    css`
      color: ${colors.succesColors.s500} 
  `}
  ${(props) => props.color === 'false' &&
    css`
      color: ${colors.dangerColors.d500} 
  `}
`

const TituloError = styled.p<Props>`
  display: none;
  color: ${colors.dangerColors.d500};
  font-size: 0.93rem;
  font-weight: 500;
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
