/**
 Este es el componente que genera la pagina de Login
 */

import React, { FormEvent, useState } from 'react'

import { ButtonGradient } from '../../components/atoms/ButtonGradient/ButtonGradient'
import { expresiones } from '../../const/expresionesRegulares'
import { InputForm } from '../../components/molecules/InputForm/InputForm'
import { Button } from '../../components/atoms/Button/Button'
import { ContenedorFlex, FormContainer, GlobalContainer, HeaderForm } from './LoginScreen.styles.js'
import { FormType } from './LoginScreen.interface'
import { ButtonIcon } from '../../components/atoms/ButtonIcon/ButtonIcon'

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

  const handleLogin = (e: HandleInputLogin) => {
    e.preventDefault()

    // Acá se realiza la validación de ambos formularios y redirija a '/'
    if (correo.valido === 'true' && password.valido === 'true') {
      console.log('Listo')
    }
  }

  const handleSignUp = () => {
    console.log('SignUp')
  }

  return (
    <>
      <GlobalContainer>

        <FormContainer onSubmit={handleLogin}>
          <HeaderForm margin>
            <h2> Inicia Sección</h2>
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
            <ButtonGradient type="submit" name="Iniciar Sección" />

            <ButtonIcon type="button" onClick={handleSignUp} name="Registrate" nameIcon='arrow-forward-circle-outline' />
          </ContenedorFlex>
        </FormContainer>
      </GlobalContainer>
    </>
  )
}
