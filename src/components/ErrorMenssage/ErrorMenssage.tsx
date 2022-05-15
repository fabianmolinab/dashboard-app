/**
 * Componente que muestra mensaje de enviado o de error en el input dendiendo si la validación
 * @param {object} mensajeConfirmacion Valor del estado de validación
 *
 */
import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../../const/colors'
import { ConfirmMessage } from '../../pages/SignUp/SignUp.interface'

interface Props {
  mensajeConfirmacion: ConfirmMessage;
}

export const ErrorMenssage: React.FC<Props> = ({ mensajeConfirmacion }) => {
  return (
    <>
      {mensajeConfirmacion.correcto === 'true' &&
        mensajeConfirmacion.fallido === 'false'
        ? (
          <RegistroEnviado mensaje={mensajeConfirmacion.correcto} correcto>
            Un mensaje fue enviado a su email para confirmar el registro
          </RegistroEnviado>
          )
        : mensajeConfirmacion.correcto === 'false' &&
          mensajeConfirmacion.fallido === 'true'
          ? (
            <RegistroEnviado mensaje={mensajeConfirmacion.fallido} fallido>
              Le falto alguno de los cambios
            </RegistroEnviado>
            )
          : (
            <RegistroEnviado mensaje={mensajeConfirmacion.fallido} fallido />
            )}
    </>
  )
}

interface RegistroEnviadoType {
  readonly mensaje: string
  readonly fallido?: boolean
  readonly correcto?: boolean
}

const RegistroEnviado = styled.p<RegistroEnviadoType>`
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
  ${(props) =>
    props.correcto &&
    css`
      color: ${colors.darkGreen};
    `}
`
