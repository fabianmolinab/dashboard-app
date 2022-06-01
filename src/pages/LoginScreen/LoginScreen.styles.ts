import styled, { css } from 'styled-components'
import { colors } from '../../const/colors'
import { device } from '../../const/device'

interface SignupProps {
  readonly signup?: boolean;
}

interface MarginProps {
  readonly margin?: boolean;
}

const GlobalContainer = styled.div<SignupProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  height: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    max-width: 800px;
  }

  //Styles for the signup || The register page || You have to set this property to be activated

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
  color: ${colors.primaryColors.pBase};
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

const HeaderForm = styled.header<MarginProps>`
  font-size: 1.4rem;
  margin-bottom: 30px;
  
  ${(props) =>
    props.margin &&
    css`
      margin-bottom: 30px;
    `}
`
const ContenedorFlex = styled.div`
  display: flex;
  margin: 0 auto;
`
export { GlobalContainer, FormContainer, HeaderForm, ContenedorFlex }
