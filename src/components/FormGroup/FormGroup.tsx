import MuiFormGroup, { FormGroupProps } from '@mui/material/FormGroup';

const FormGroupBasic = ({ children, ...props }: FormGroupProps) => {
    return (
        <MuiFormGroup {...props}>{children}</MuiFormGroup>
    )
}

export default FormGroupBasic;