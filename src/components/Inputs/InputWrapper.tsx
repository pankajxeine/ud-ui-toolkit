// ud-ui-toolkit
import InfoIcon from "@mui/icons-material/Info";
import {
  FormHelperText,
  FormLabel,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import React from "react";
import styled from "styled-components";

interface IntputWrapperProps {
  info?: string;
  hint?: string;
  children: any;
  error?: any;
}

const StyledStack = styled(Stack)`
  .MuiFormLabel-asterisk {
    color: red;
  }
`;

const InputWrapper: React.FC<IntputWrapperProps> = ({
  info,
  hint,
  children,
  error,
}) => {
  return (
    <StyledStack>
      <Stack spacing={0.5} sx={{ paddingBottom: "8px" }}>
        {/* Render the FormLabel with the required asterisk and info icon */}
        <FormLabel
          sx={{
            display: "flex",
            alignItems: "center",
            "& .MuiFormLabel-asterisk": { display: "none" },
          }}
        >
          {/* {label}
                    {required && <span style={{ color: "red" }}>*</span>} */}

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
        </FormLabel>

        {/* Optionally render the hint below the label */}
      </Stack>

      {children}
      {/* Conditionally render error message only if error is true */}
      {error && (
        <FormHelperText sx={{ margin: "0px", color: "red" }}>{error.message}</FormHelperText>
      )}
    </StyledStack>
  );
};

export default InputWrapper;
