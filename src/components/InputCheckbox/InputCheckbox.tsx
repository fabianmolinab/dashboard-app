/**
 * Componente de input tipo checkbox de formulario de validación
 * @param {object} estado Valor del estado del Checkbox
 * @param {function} cambiarEstado Cambia el estado
 * @param {string} id Nombre para enlazar el input con el Label
 * */
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { TerminosType } from '../../pages/SignUp/SignUp.interface'

interface Props {
  estado: TerminosType
  cambiarEstado: Dispatch<SetStateAction<TerminosType>>
  id: string
}

export const InputCheckbox: React.FC<Props> = ({ estado, cambiarEstado, id }) => {
  type HandleInputType = ChangeEvent<HTMLInputElement>

  const handleInputChange = ({ target }: HandleInputType) => {
    cambiarEstado({ ...estado, checked: target.checked })
  }

  return (
    <Input
      type="checkbox"
      checked={estado.checked}
      onChange={handleInputChange}
      id={id}
    />
  )
}

const Input = styled.input`
  display: inline-block;
  margin-right: 10px;
`
