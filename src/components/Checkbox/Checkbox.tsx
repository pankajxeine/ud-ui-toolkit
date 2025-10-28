// ud-ui-toolkit
import { Checkbox, FormControlLabel } from "@mui/material";
import { CheckboxWrapperProps } from "./ICheckbox"; // Import the interface

const CheckboxWrapper = ({
  label,
  checked,
  onChange,
  disabled = false,
  size = "medium",
  color = "primary",
  ...rest
}: CheckboxWrapperProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          size={size}
          color={color}
          {...rest} // Spread other props (e.g., sx) to Checkbox
        />
      }
      label={label}
    />
  );
};

export default CheckboxWrapper;
