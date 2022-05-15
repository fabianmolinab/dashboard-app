import styled, { css } from 'styled-components'
import { device } from '../../const/device'
import { colors } from '../../const/colors'

const FormGrid = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px;

  @media ${device.tablet} {
    width: 60.5%;
    height: 100%;
    margin-top: 20px;
  }

  @media ${device.laptop} {
    width: 60.5%;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    margin: 100px 10px 0 0;
    column-gap: 10px;
  }
`

// Contenedor Grid que ocupa (2fr-column)
// Propiedad Flex es display flex

type ContenedorGridC2Type = {
  readonly flex?: boolean
  readonly paddB_15?: boolean
  readonly paddT_15?: boolean
}

const ContenedorGridC2 = styled.div<ContenedorGridC2Type>`
  @media ${device.laptop} {
    grid-column: span 2;
  }

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}

  ${(props) =>
    props.paddB_15 &&
    css`
      padding: 5px 0 15px 0;
    `}

  ${(props) =>
    props.paddT_15 &&
    css`
      margin: 15px 0;
    `}
`

/* Estilos para mostrar o no el mensaje enviado,
 * Si es true su muestra el mensaje, si es false no se muestra
 * Ambas son propiedad de tipo string del componente
 */

type RegistroEnviadoType = {
  readonly fallido?: boolean
  readonly mensaje: string
}

const RegistroEnviado = styled.p <RegistroEnviadoType>`
  font-size: 17px;
  font-weight: 600;

  ${(props) =>
    props.mensaje === 'true' &&
    css`
      display: block;
    `}
  ${(props) =>
    props.mensaje === 'false' &&
    css`
      display: none;
    `}
  ${(props) =>
    props.fallido &&
    css`
      color: ${colors.red};
    `}
`

export { FormGrid, ContenedorGridC2, RegistroEnviado }
