import React from 'react'
import styled from 'styled-components'
import { ButtonStyles } from '../Button/Button'

interface Props {
  onClick?: () => void
  name: string
  type: 'submit' | 'reset' | 'button'
  small?: boolean
  large?: boolean
  nameIcon: string
}

export const ButtonIcon: React.FC<Props> = ({ onClick, name, type, nameIcon, small, large }) => {
  return (
    <div>
      <ButtonIconStyles onClick={onClick} type={type} small={small} large={large}>
        <div>
          {name}
        </div>
        <ion-icon name={nameIcon}></ion-icon>
      </ButtonIconStyles >
    </div>
  )
}

/*
 * ! Styles small and large search in component Button.tsx
 */

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
