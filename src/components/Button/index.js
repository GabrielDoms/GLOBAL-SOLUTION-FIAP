import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #66bb6a; 

  color: #ffffff;

  font-size: 1rem;
  font-weight: 600;

  border-radius: 0.25rem;

  border: none;

  cursor: pointer;

  &:not(:disabled):hover {
    filter: brightness(0.95);
  }

  &:disabled {
    filter: brightness(0.8);

    cursor: not-allowed;
  }
`;
