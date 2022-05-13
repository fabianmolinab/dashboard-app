
/**
 * Componente boton estandar
 * @param {function} onClick Accion despues del click
 * @param {string} name Contenido del boton
 * @param {object} largeV Propiedad para hacer el botton mas ancho y verde
 * */
import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../../const/colors'

export const Button = ({ onClick, name, type, largeV }) => {
  return (
    <BottonStyles onClick={onClick} type={type} largeV={largeV}>
      {name}
    </BottonStyles>
  )
}

export const BottonStyles = styled.button`
  width: 150px;
  height: 40px;
  margin-left: 20px;
  font-weight: 700;
  background: ${colors.green};
  border: 1.5px solid ${colors.green};
  cursor: pointer;
  color: ${colors.Black};
  transition: all 0.4s;
  border-radius: 8px;

  &:hover {
    font-weight: 700;
    //border-width: medium;
    transform: scale(1.1, 1.1);
  }

  ${(props) =>
    props.largeV &&
    css`
      width: 200px;
      margin: 10px auto;
      background: ${colors.white};
      color: ${colors.white};
    `}
`
