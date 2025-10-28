// ud-ui-toolkit
import { styled } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";
import { InputFieldProps } from "../../types/InputProps";
import AutocompleteBasic from "../Autocomplete/Autocomplete";
import { TextField } from "../Textfield";
import InputWrapper from "./InputWrapper";

const StyledAutocomplete = styled(AutocompleteBasic)`
  .MuiInputBase-root {
    height: 56px;
  }
`;

const FormAutoComplete = (props: InputFieldProps) => {
  const { name, control, info, hint, meta, label, options } = props;
  const filterMeta = (meta: Record<string, any>) => {
    const { maxRows, ...validMeta } = meta || {};
    return validMeta;
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        console.log(value);
        return (
          <InputWrapper info={info} hint={hint} error={error}>
            <FormControl fullWidth>
              <StyledAutocomplete
                onChange={(_e, v) => onChange(v)}
                value={value}
                options={options as readonly any[]}
                {...filterMeta(meta)}
                getOptionLabel={(option) => {
                  return option.desc;
                }}
                renderInput={(params) => (
                  <TextField error={!!error} {...params} label={label} />
                )}
              />
            </FormControl>
          </InputWrapper>
        );
      }}
    />
  );
};

export default FormAutoComplete;