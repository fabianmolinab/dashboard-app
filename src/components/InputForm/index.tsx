/**
 * Este componente es el input de algun formulario
 * @param {object} estado
 * @param {function} cambiarEstado Cambia el estado del input
 * @param {string} name Titulo del formulario
 * @param {string} type Tipo de Input
 * @param {string} error Mensaje de error
 * @param {object} expresionRegular Tipo de expresion regular
 * @param {props} signup Es una propiedad de estilos propios en la pagina signup
 */

import React from 'react'
import { Input } from '../Input'
import { ContenedorInput, LabelInput, TituloError } from './InputForm.styles'

export const InputForm = ({
  estado,
  cambiarEstado,
  name,
  type,
  error,
  expresionRegular,
  signup
}) => {
  return (
    <ContenedorInput signup={signup}>
      <LabelInput color={estado.valido}>{name}</LabelInput>

      <Input
        estado={estado}
        cambiarEstado={cambiarEstado}
        name={name}
        type={type}
        valido={estado.valido}
        expresionRegular={expresionRegular}
      />

      <TituloError valido={estado.valido}>{error}</TituloError>
    </ContenedorInput>
  )
}
