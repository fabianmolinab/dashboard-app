/**
 Este es el componente que genera la pagina de Login
 */

import React, { FormEvent, useState } from 'react'

import { expresiones } from '../../const/expresionesRegulares'
import { InputForm } from '../../components/molecules/InputForm/InputForm'
import { ContenedorFlex, FormContainer, GlobalContainer, HeaderForm } from './LoginScreen.styles.js'
import { FormType } from './LoginScreen.interface'
import { ButtonIcon } from '../../components/atoms/ButtonIcon/ButtonIcon'
import { ButtonSecondary } from '../../components/atoms/ButtonSecondary/ButtonSecondary'
import { useNavigate } from 'react-router-dom'

export const LoginScreen: React.FC = () => {
  const [correo, cambiarCorreo] = useState<FormType>({
    campo: '',
    valido: ''
  })

  const [password, cambiarPassword] = useState<FormType>({
    campo: '',
    valido: ''
  })

  type HandleInputLogin = FormEvent<HTMLFormElement>

  const navigate = useNavigate()

  const handleLogin = (e: HandleInputLogin) => {
    e.preventDefault()

    // Acá se realiza la validación de ambos formularios y redirija a '/'
    if (correo.valido === 'true' && password.valido === 'true') {
      console.log('Listo')
    }
  }

  const handleSignUp = () => {
    navigate('/signup')
  }

  return (
    <>
      <GlobalContainer>

        <FormContainer onSubmit={handleLogin}>
          <HeaderForm margin>
            <h3> Inicio Sección</h3>
          </HeaderForm>

          <InputForm
            estado={correo}
            cambiarEstado={cambiarCorreo}
            name="Correo Electronico"
            type="mail"
            error="Tienes un error en el correo"
            expresionRegular={expresiones.mail}
          />

          <InputForm
            estado={password}
            cambiarEstado={cambiarPassword}
            name="Contraseña"
            type="password"
            error="Tienes un error en la contraseña"
            expresionRegular={expresiones.password}
          />
          <ContenedorFlex>
            <ButtonSecondary type="submit" name="Iniciar Sección" />

            <ButtonIcon type="button" onClick={handleSignUp} name="Registrate" nameIcon='arrow-forward-circle-outline' />
          </ContenedorFlex>
        </FormContainer>
      </GlobalContainer>
    </>
  )
}
