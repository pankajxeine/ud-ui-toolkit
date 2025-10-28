// ud-ui-toolkit
import FormControl from "@mui/material/FormControl";
import { useMemo } from "react";
import { Controller } from "react-hook-form";
import { InputFieldProps } from "../../types/InputProps";
import { Box } from "../Box";
import { Chip } from "../Chip";
import { Close } from "@mui/icons-material";
import { InputAdornment } from "../InputAdornment";
import { InputLabel } from "../InputLabel";
import { MenuItem } from "../Menu";
import { Select } from "../Select";
import InputWrapper from "./InputWrapper";

const FormSelect = (props: InputFieldProps) => {
  const {
    name,
    control,
    label,
    info,
    hint,
    meta,
    selectKeys,
    options,
    validations = [],
  } = props;

  const memoizedOptions = useMemo(() => options, [options]);

  const showEndAdornment = (value: any) => {
    console.log(value);
    if (value) {
      if (value instanceof Array && value.length == 0) {
        return false;
      }
      return true;
    }
    return false;
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputWrapper info={info} hint={hint} error={error}>
          <FormControl
            fullWidth
            required={validations.length > 0}
            error={!!error}
          >
            <InputLabel>{label}</InputLabel>
            <Select
              labelId={`${name}-select`}
              aria-label={`${name}-label ${value}`}
              required={validations.length > 0}
              label={label}
              style={{ height: "55px" }}
              onChange={(event) => onChange(event.target.value)}
              value={value}
              endAdornment={
                showEndAdornment(value) ? ( // Show clear button only if there's a selected value
                  <InputAdornment position="end" sx={{ mr: 3.4 }}>
                    <Close
                      onClick={() => onChange(meta.multiple ? [] : "")}
                      sx={{ padding: 0.5, cursor: "pointer" }}
                      aria-label="Cancel Selection"
                    />
                  </InputAdornment>
                ) : null
              }
              {...(meta?.isChip
                ? {
                  renderValue: (selected: any) => {
                    if (typeof selected === "string") {
                      return (
                        <Chip title="Chip" key={selected} label={selected} />
                      );
                    }
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          width: "fit-content",
                        }}
                        onMouseDown={(event) => event.stopPropagation()}
                      >
                        {selected?.map((fieldValue: any) => (
                          <Chip
                            key={fieldValue}
                            title={name}
                            label={fieldValue}
                            onDelete={() => {
                              onChange(
                                value.filter(
                                  (chip: string) => chip !== fieldValue,
                                ),
                              );
                            }}
                          />
                        ))}
                      </Box>
                    );
                  },
                }
                : {})}
              {...meta}
            >
              {memoizedOptions &&
                memoizedOptions.map((option) => {
                  const key = selectKeys?.codeKey ?? "value";
                  const labelKey = selectKeys?.labelKey ?? "desc";
                  return (
                    <MenuItem
                      key={option[key as keyof typeof option]}
                      value={option.value}
                    >
                      {option[labelKey as keyof typeof option]}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </InputWrapper>
      )}
    />
  );
};

export default FormSelect;
