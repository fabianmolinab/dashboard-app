import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../const/colors'
import { ButtonStyles } from '../Button/Button'

interface Props {
  onClick?: () => void
  name: string
  type: 'submit' | 'reset' | 'button'
  small?: boolean
  large?: boolean
}

export const ButtonSecondary: React.FC<Props> = ({ onClick, name, type, small, large }) => {
  return (
    <ButtonSecondaryStyles onClick={onClick} type={type} small={small} large={large}>
      {name}
    </ButtonSecondaryStyles>
  )
}

const ButtonSecondaryStyles = styled(ButtonStyles)`
  background-color: ${colors.primaryColors.p200};
  color: ${colors.primaryColors.pBase};

  &:hover {
    background-color: ${colors.primaryColors.p300};
    box-shadow: 2px 2px 8px ${colors.greysColors.grey400}; 
    color: ${colors.primaryColors.p600}
  }
`
