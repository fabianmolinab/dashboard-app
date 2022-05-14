
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { FormType } from '../../pages/LoginScreen/LoginScreen.interface'
import { InputStyles } from './Input.styles'

interface Props {
  estado: FormType
  cambiarEstado: Dispatch<SetStateAction<FormType>>
  name: string
  type: string
  valido: string
  expresionRegular: RegExp
}

export const Input: React.FC<Props> = ({
  estado,
  cambiarEstado,
  name,
  type,
  valido,
  expresionRegular
}) => {
 type HandleInputChange = ChangeEvent<HTMLInputElement>

 const onChange = ({ target }: HandleInputChange) => {
   cambiarEstado({
     ...estado,
     campo: target.value
   })
 }

 const validacion = () => {
   if (expresionRegular) {
     if (expresionRegular.test(estado.campo)) {
       cambiarEstado({
         ...estado,
         valido: 'true'
       })
     } else {
       cambiarEstado({
         ...estado,
         valido: 'false'
       })
     }
   }
 }

 return (
    <InputStyles
      type={type}
      autoComplete="off"
      value={estado.campo}
      onChange={onChange}
      onBlur={validacion}
      valido={valido}
      name={name}
    />
 )
}
