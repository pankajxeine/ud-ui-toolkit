// ud-ui-toolkit
import { FormLabel, RadioGroup } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";
import { InputFieldProps } from "../../types/InputProps";
import { FormControlLabel } from "../FormControlLabel";
import { Radio } from "../Radio";
import InputWrapper from "./InputWrapper";

export const FormRadio = (props: InputFieldProps) => {
  const {
    name,
    label,
    control,
    info,
    hint,
    meta,
    options,
    validations = [],
  } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputWrapper info={info} hint={hint} error={error}>
          <FormControl fullWidth>
            <FormLabel required={validations.length > 0}>{label}</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={onChange}
              value={value}
              {...meta}
            >
              {options?.map((option) => (
                <FormControlLabel
                  value={option.value}
                  control={<Radio />}
                  label={option.desc}
                  key={option.value}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </InputWrapper>
      )}
    />
  );
};

export default FormRadio;
