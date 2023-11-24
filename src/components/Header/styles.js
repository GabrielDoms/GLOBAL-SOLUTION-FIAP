import styled from "styled-components"
import { Button } from "../Button"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(to right, #66bb6a, #4caf50);

  padding: 2rem 8rem;

  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  column-gap: 1rem;
`

export const WorkTitle = styled.span`
  color: white;
  
  font-size: 2rem;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;

  column-gap: 1rem;
`

export const HeaderNavigationSpan = styled.span`
  color: white;

  font-size: 1rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }
`

export const HeaderNavigationButton = styled(Button)`
  max-width: 150px;
`
