import { InputAdornment, InputAdornmentProps } from '@mui/material';
const InputAdornmentComp = ({ children, ...props }: InputAdornmentProps) => {
    return <InputAdornment {...props}>{children}</InputAdornment>;
};
export default InputAdornmentComp;