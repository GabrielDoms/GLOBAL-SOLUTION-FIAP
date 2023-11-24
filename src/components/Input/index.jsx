import { forwardRef } from "react";
import { InputContainer, InputLabel, StyledInput } from "./styles";

export const Input = forwardRef(({ label, ...props }, ref) => {
  return (
    <InputContainer>
      <InputLabel htmlFor={props.name}>{label}</InputLabel>
      <StyledInput type="text" ref={ref} {...props} />
    </InputContainer>
  );
});

Input.displayName = "Input";
