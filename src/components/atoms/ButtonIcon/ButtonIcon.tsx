import React from 'react'
import styled from 'styled-components'
import { ButtonStyles } from '../Button/Button'

interface Props {
  onClick?: () => void
  name: string
  type: 'submit' | 'reset' | 'button'
  nameIcon: string
}

export const ButtonIcon: React.FC<Props> = ({ onClick, name, type, nameIcon }) => {
  return (
    <div>
      <ButtonIconStyles onClick={onClick} type={type}>
        <div>
          {name}
        </div>
        <ion-icon name={nameIcon}></ion-icon>
      </ButtonIconStyles >
    </div>
  )
}

const ButtonIconStyles = styled(ButtonStyles)`
  display: flex;  
  align-items: center;
  margin-left: 15px;
  ion-icon {
    display: block;
    margin-left: 8px;
    font-size: 20px;
  }
`
