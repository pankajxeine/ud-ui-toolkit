// ud-ui-toolkit
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import styled from "styled-components";
import { InputFieldProps } from "../../types/InputProps";
import InputWrapper from "./InputWrapper";

const TextStyle = styled(TextField)`
  input {
    height: 39px;
  }
  label {
    line-height: 2.5;
  }
  .MuiInputLabel-shrink {
    line-height: 1.52;
  }
`;

const FormInputText = (props: InputFieldProps) => {
  const { name, control, info, hint, meta, validations = [] } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputWrapper info={info} hint={hint} error={error}>
          <FormControl fullWidth>
            <TextStyle
              required={validations.length > 0}
              variant="outlined"
              onChange={onChange}
              label={props.label}
              value={value}
              error={!!error}
              {...meta}
            />
          </FormControl>
        </InputWrapper>
      )}
    />
  );
};

export default FormInputText;