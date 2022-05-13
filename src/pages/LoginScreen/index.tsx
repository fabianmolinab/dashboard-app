/**
 Este es el componente que genera la pagina de Login
 */

import { useState } from 'react'
import styled, { css } from 'styled-components'
import { device } from '../../const/device.js'
import { ButtonGradient } from '../../components/ButtonGradient'
import { expresiones } from '../../const/expresionesRegulares'
import { InputForm } from '../../components/InputForm/index'
import { Button } from '../../components/Button/index'

export const LoginScreen = (props: {}) => {
  // Hook para manejar el formulario del correo
  const [correo, cambiarCorreo] = useState({
    campo: '',
    valido: null
  })

  const [password, cambiarPassword] = useState({
    campo: '',
    valido: null
  })

  const handleLogin = (e) => {
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
          <HeaderForm marginB30>
            <h2> Inicia Sección</h2>
          </HeaderForm>

          <InputForm
            estado={correo}
            cambiarEstado={cambiarCorreo}
            name="Correo Electronico"
            type="text"
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

            <Button onClick={handleSignUp} name="Registrate" />
          </ContenedorFlex>
        </FormContainer>
      </GlobalContainer>
    </>
  )
}

const GlobalContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  height: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    max-width: 800px;
  }

  //Estilos para el signup || La pagina de registrate || Hay que colocar esa propiedad para que se active

  ${(props) =>
    props.signup &&
    css`
      @media ${device.tablet} {
        max-width: 800px;
        align-items: flex-start;
      }

      @media ${device.laptop} {
        max-width: 1000px;
      } ;
    `}
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 40.5%;

  @media ${device.mobileS} {
    width: 80%;
  } ;
`
const HeaderForm = styled.header`
  text-align: center;
  box-sizing: border-box;
  ${(props) =>
    props.marginB30 &&
    css`
      margin-bottom: 30px;
    `}
`
const ContenedorFlex = styled.div`
  display: flex;
  margin: 0 auto;
`
