// ud-ui-toolkit
import { FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import { InputFieldProps } from "../../types/InputProps";
import { Toggle } from "../Toggle";
import InputWrapper from "./InputWrapper";

const FormToggle = (props: InputFieldProps) => {
  const { name, control, label, info, hint, meta } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputWrapper info={info} hint={hint} error={error}>
          <FormControlLabel
            control={
              <Toggle
                onChange={onChange}
                checked={value}
                value={value}
                {...meta}
              />
            }
            label={label}
          />
        </InputWrapper>
      )}
    />
  );
};

export default FormToggle;