// ud-ui-toolkit
import { FormGroup, FormLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import React from "react";
import { Controller } from "react-hook-form";
import { InputFieldProps } from "../../types/InputProps";
import { Checkbox } from "../Checkbox";
import { Grid } from "../Grid";
import InputWrapper from "./InputWrapper";

const FormCheckBox = (props: InputFieldProps) => {
  const { name, control, info, hint, value, label, options } = props;
  const stateRef = React.useRef<any>(value);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <InputWrapper info={info} hint={hint} error={error}>
          <FormControl fullWidth>
            <FormLabel>{label}</FormLabel>
            <FormGroup>
              <Grid direction="column">
                {options?.map((option) => (
                  <Checkbox
                    label={option.desc}
                    onChange={(v) => {
                      const state = stateRef.current;
                      stateRef.current = {
                        ...state,
                        [option.value]: v.target.checked,
                      };
                      onChange({
                        target: {
                          value: stateRef.current,
                        },
                      });
                    }}
                    value={option.value}
                    checked={stateRef.current[option.value]}
                    name={option.value + ""}
                    key={option.value}
                  />
                ))}
              </Grid>
            </FormGroup>
          </FormControl>
        </InputWrapper>
      )}
    />
  );
};

export default FormCheckBox;
