import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
  FormHelperText,
  OutlinedInput,
  Stack,
  TextField,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { InputFieldWrapperProps } from '../../types/IInputWrapperProps';

const InputFieldWrapper: React.FC<InputFieldWrapperProps> = ({
  error,
  inputProps,
  errorText,
  children,
  ...rest
}) => {
  const { label, required = false, info = "", placeholder = "", hint } = inputProps;
  return (
    <FormControl fullWidth required={required} error={error} {...rest}>
      {/* Use Stack to stack label and hint with padding bottom for the entire block */}
      <Stack spacing={0.5} sx={{ paddingBottom: "8px" }}>
        {/* Render the FormLabel with the required asterisk and info icon */}
        <FormLabel
          sx={{
            display: "flex",
            alignItems: "center",
            "& .MuiFormLabel-asterisk": { display: "none" },
          }}
        >
          {label}
          {required && <span style={{ color: "red" }}>*</span>}

          {/* Position the InfoIcon at the end */}
          {info && (
            <Tooltip title={info} arrow>
              <IconButton
                sx={{ padding: 0, marginLeft: "auto" }}
                aria-label="Information"
              >
                <InfoIcon fontSize="small" color="info" />
              </IconButton>
            </Tooltip>
          )}
        </FormLabel>

        {/* Optionally render the hint below the label */}
        {hint && (
          <div
            style={{
              fontSize: "0.875rem",
              color: "gray",
              fontStyle: "italic",
              marginTop: 0,
            }}
          >
            {hint}
          </div>
        )}
      </Stack>

      {/* Handle the children and apply logic for placeholder with select */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // If the child is a TextField, only pass the error prop to it
          if (child.type === TextField) {
            return React.cloneElement(child, {
              //@ts-ignore
              error
            });
          }

          // If the child is a Select component and there's a placeholder, add a MenuItem as the placeholder
          if (child.type === Select && placeholder) {
            return React.cloneElement(child, {
              //@ts-ignore
              children: [
                <MenuItem value="" key="placeholder" disabled>
                  <em>{placeholder}</em>
                </MenuItem>,
                ...React.Children.toArray(child.props.children),
              ],
              input: <OutlinedInput notched={false} />,
            });
          }

          return React.cloneElement(child, {
            //@ts-ignore
            placeholder: placeholder,
          });
        }

        return child;
      })}

      {/* Conditionally render error message only if error is true */}
      {error && errorText && (
        <FormHelperText sx={{ margin: "0px" }}>{errorText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default InputFieldWrapper;
