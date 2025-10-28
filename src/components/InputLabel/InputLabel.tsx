// ud-ui-toolkit
import InputLabel from "@mui/material/InputLabel";
import { InputLabelWrapperProps } from "./IInputLabelProps";

const InputLabelWrapper = ({ children, ...rest }: InputLabelWrapperProps) => {
  return <InputLabel {...rest}>{children}</InputLabel>;
};

export default InputLabelWrapper;
