// ud-ui-toolkit
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";
import { InputFieldProps } from "../../types/InputProps";
import InputWrapper from "./InputWrapper";
import { FormLabel, styled, TextareaAutosize as TextArea } from "@mui/material";

const TextareaAutosize = styled(TextArea)(
  ({ theme }) => `
  box-sizing: border-box;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? "#C7D0DD" : "#1C2025"};
  background: ${theme.palette.mode === "dark" ? "#1C2025" : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? "#434D5B" : "#DAE2ED"};
  box-shadow: 0 2px 2px ${theme.palette.mode === "dark" ? "#1C2025" : "#F3F6F9"};

  &:hover {
    border-color: ${"#3399FF"};
  }

  &:focus {
    border-color: ${"#3399FF"};
    box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? "#0072E5" : "#b6daff"};
  }

  /* firefox */
  &:focus-visible {
    outline: 0;
  }
`,
);

export const FormTextArea = (props: InputFieldProps) => {
  const { name, control, info, hint, meta, label, validations = [] } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputWrapper info={info} hint={hint} error={error}>
          <FormControl fullWidth>
            <FormLabel
              style={{ marginBottom: 3 }}
              required={validations.length > 0}
            >
              {label}
            </FormLabel>
            <TextareaAutosize
              onChange={onChange}
              value={value}
              minRows={5}
              {...meta}
            />
          </FormControl>
        </InputWrapper>
      )}
    />
  );
};

export default FormTextArea;
