
/**
 * Este componente es un boton de tipo gradiente
 * @param {string} name Nombre del boton
 * @param {string} type Tipo de boton
 **/
import React from 'react'
import styled from 'styled-components'
import { colors } from '../../const/colors'

interface Props {
  name: string
  type: 'submit' | 'reset' | 'button'
}

export const ButtonGradient: React.FC<Props> = ({ name, type }) => {
  return (
    <>
      <ContenedorBoton>
        <Button type={type}>{name}</Button>
        <Bg />
        <BgGradient />
      </ContenedorBoton>
    </>
  )
}

const Button = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: 600;
  background: ${colors.white};
  border: 1.5px solid ${colors.black};
  color: ${colors.black};
  cursor: pointer;
  transition: all 0.3s;
  z-index: 3;
  border-radius: 10px;

  &:hover {
    color: ${colors.black};
    font-weight: 700;
    border: none;
    background: linear-gradient(
      to right,
      ${colors.blue},
      ${colors.green},
      ${colors.darkGreen}
    );
  }
`

const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${colors.white};
  z-index: 2;
  transform: scale(1.05, 1.2);
  border-radius: 10px;
`

const BgGradient = styled(Bg)`
  z-index: 1;
  transform: scale(0.2, 1.4);
  transition: all 0.4s;
`

const ContenedorBoton = styled.div`
  width: 150px;
  height: 40px;
  background: ${colors.white};
  position: relative;
  border-radius: 10px;

  &:hover ${BgGradient} {
    transform: scale(1.1, 1.4);
    background: linear-gradient(
      to right,
      ${colors.blue},
      ${colors.green},
      ${colors.darkGreen}
    );
  }
`
