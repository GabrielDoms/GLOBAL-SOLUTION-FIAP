import { forwardRef } from "react";
import { TextareaContainer, TextareaLabel, StyledTextarea } from "./styles";

export const Textarea = forwardRef(({ label, ...props }, ref) => {
  return (
    <TextareaContainer>
      <TextareaLabel htmlFor={props.name}>{label}</TextareaLabel>
      <StyledTextarea type="text" ref={ref} {...props} />
    </TextareaContainer>
  );
});

Textarea.displayName = "Textarea";
