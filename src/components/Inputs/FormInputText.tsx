import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

import FormControl from "@mui/material/FormControl";
import FormUtil from "../../utils/FormUtil";
import InputWrapper from "./InputWrapper";
import { InputFieldProps } from '../../types/InputProps';

export const FormInputText = (props: InputFieldProps) => {
  const { name, control, info, hint, meta } = props;
  const label = FormUtil.getDisplayLabel(props);
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error }
      }) => (
        <InputWrapper info={info} hint={hint} error={error}>
          <FormControl fullWidth>
            <TextField
              onChange={onChange}
              label={label}
              value={value}
              error={!!error}
              {...meta}
            />
          </FormControl>
        </InputWrapper>
      )
      }
    />
  );
};
