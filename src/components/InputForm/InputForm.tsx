
import React, { Dispatch, SetStateAction } from 'react'
import { FormType } from '../../pages/LoginScreen/LoginScreen.interface'
import { Input } from '../Input/Input'
import { ContenedorInput, LabelInput, TituloError } from './InputForm.styles'

interface Props {
  estado: FormType
  cambiarEstado: Dispatch<SetStateAction<FormType>>
  name: string
  type: string
  error: string
  expresionRegular: RegExp
  signup?: boolean | undefined
}

export const InputForm: React.FC<Props> = ({
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
