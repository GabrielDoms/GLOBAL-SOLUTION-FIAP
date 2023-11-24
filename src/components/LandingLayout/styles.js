import styled from "styled-components"

export const LandingLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LandingLayoutContent = styled.main`
  padding: 4rem 8rem;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`