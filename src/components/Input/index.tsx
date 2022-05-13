/**
 * @param {object} estado
 * @param {function} cambiarEstado Cambia el estado del input
 * @param {string} name Titulo del formulario
 * @param {string} type Tipo de Input
 * @param {string} valido Cambiar el color del borde de el formulario
 *
 * */
import styled, { css } from 'styled-components'
import { colors } from '../../const/colors'

export const Input = ({
  estado,
  cambiarEstado,
  name,
  type,
  valido,
  expresionRegular
}) => {
  const onChange = ({ target }) => {
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

const InputStyles = styled.input`
  display: block;
  width: 85%;
  padding: 6px;
  border: 1.5px solid #000;
  border-radius: 8px;
  background-color: ${colors.white};

  /*La propiedad valido cambiar el color del borde del input*/
  ${(props) =>
    props.valido === 'true' &&
    css`
      border: 1.5px solid ${colors.green} !important;
    `}
  ${(props) =>
    props.valido === 'false' &&
    css`
      border: 1.5px solid ${colors.red} !important;
    `}
`
