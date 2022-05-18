import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { FormType } from '../LoginScreen/LoginScreen.interface'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { ContenedorGridC2, FormGrid } from './SignUp.styles'
import { GlobalContainer } from '../LoginScreen/LoginScreen.styles'
import { HeaderFormSignUp } from '../../components/atoms/HeaderForm/HeaderFormSignUp'
import { expresiones } from '../../const/expresionesRegulares'
import { InputForm } from '../../components/molecules/InputForm/InputForm'
import { ConfirmMessage, TerminosType } from './SignUp.interface'
import { InputCheckbox } from '../../components/molecules/InputCheckbox/InputCheckbox'
import { Button } from '../../components/atoms/Button/Button'
import { ErrorMenssage } from '../../components/atoms/ErrorMenssage/ErrorMenssage'

export const SignUp: React.FC = () => {
  const [nombre, cambiarNombre] = useState<FormType>({
    campo: '',
    valido: ''
  })

  const [correo1, cambiarCorreo1] = useState<FormType>({
    campo: '',
    valido: ''
  })

  const [correo2, cambiarCorreo2] = useState<FormType>({
    campo: '',
    valido: ''
  })

  const [password1, cambiarPassword1] = useState<FormType>({
    campo: '',
    valido: ''
  })

  const [password2, cambiarPassword2] = useState<FormType>({
    campo: '',
    valido: ''
  })

  const [terminos, cambiarTerminos] = useState<TerminosType>({ checked: false })

  /** Hook que cambia el estado para mostrar o no aviso despues del envio de el formulario
       * Correcto: Es cuando el formulario cumple con todas las condiciones y el mensaje que se envia es el correcto.

       * Fallido: Es cuando alguno de los parametros del formulario falla y el mensaje que se envia es el incorrecto.
       */

  const [mensajeConfirmacion, cambiarMensajeConfirmacion] = useState<ConfirmMessage>({
    correcto: 'false',
    fallido: 'false'
  })

  type HandleLoginType = FormEvent<HTMLFormElement>

  const handleLogin = (e: HandleLoginType) => {
    e.preventDefault()

    // Este es el primer condicional que valida cada input del formulario

    if (
      nombre.valido === 'true' &&
      correo1.valido === 'true' &&
      correo2.valido === 'true' &&
      password1.valido === 'true' &&
      password2.valido === 'true' &&
      terminos.checked === true
    ) {
      /* Segunda condicion que valida que los campos de correo y de contraseña son iguales */
      if (
        correo1.campo === correo2.campo &&
        password1.campo === password2.campo
      ) {
        cambiarMensajeConfirmacion({
          correcto: 'true',
          fallido: 'false'
        })
      } else {
        cambiarMensajeConfirmacion({
          correcto: 'false',
          fallido: 'true'
        })
      }
    } else {
      cambiarMensajeConfirmacion({
        correcto: 'false',
        fallido: 'true'
      })
    }
  }

  return (
    <>
      <GlobalStyle />
      <GlobalContainer signup>

        <FormGrid onSubmit={handleLogin}>
          <ContenedorGridC2 flex paddB_15>
            <HeaderFormSignUp content="Registrate en NewsApp" grid />
          </ContenedorGridC2>

          <ContenedorGridC2>
            <InputForm
              estado={nombre}
              cambiarEstado={cambiarNombre}
              name="Nombre de Usuario"
              type="text"
              error="No puede llevar espacios, ni acentos"
              expresionRegular={expresiones.name}
              signup
            />
          </ContenedorGridC2>

          <InputForm
            estado={correo1}
            cambiarEstado={cambiarCorreo1}
            name="Correo Electronico"
            type="text"
            error="Tienes un error en el correo"
            expresionRegular={expresiones.mail}
            signup
          />

          <InputForm
            estado={correo2}
            cambiarEstado={cambiarCorreo2}
            name="Confirma tu correo electronico"
            type="text"
            error="Tienes un error en el correo"
            expresionRegular={expresiones.mail}
            signup
          />

          <InputForm
            estado={password1}
            cambiarEstado={cambiarPassword1}
            name="Contraseña"
            type="password"
            error="Debe tener de 4 hasta 12 digitos"
            expresionRegular={expresiones.password}
            signup
          />

          <InputForm
            estado={password2}
            cambiarEstado={cambiarPassword2}
            name="Confirma tu Contraseña"
            type="password"
            error="Debe tener de 4 hasta 12 digitos"
            expresionRegular={expresiones.password}
            signup
          />
          <ContenedorGridC2 paddT_15>
            <InputCheckbox
              estado={terminos}
              cambiarEstado={cambiarTerminos}
              id="condiciones"
            />
            <label htmlFor="condiciones">
              Esta de acuerdo con la politica de{' '}
              <Link to="/terminos">Terminos y condiciones</Link>
            </label>
          </ContenedorGridC2>

          <Button type="submit" name="Crear Cuenta" largeV />

          <ContenedorGridC2>
            <ErrorMenssage mensajeConfirmacion={mensajeConfirmacion} />
          </ContenedorGridC2>

          <ContenedorGridC2 paddT_15>
            <p>
              ¿Ya tienes una cuenta? <Link to="/login">Inicia Sección</Link>
            </p>
          </ContenedorGridC2>
        </FormGrid>
      </GlobalContainer>
    </>
  )
}
