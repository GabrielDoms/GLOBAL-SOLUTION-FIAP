import styled from "styled-components"

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 160px;

  background: transparent;

  border: 1px solid #a3a3a3;

  border-radius: 0.25rem;

  transition: 0.1s all;

  outline: none;

  padding: 1rem;

  resize: none;

  &:hover, &:focus {
    border: 1px solid #1e40af;
  }

`

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 0.75rem;

  width: 100%;
`

export const TextareaLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  
  color: #000000;
`