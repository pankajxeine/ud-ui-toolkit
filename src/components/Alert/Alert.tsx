import { Alert, AlertProps } from "@mui/material";

const AlertComponent = ({ children, ...props }: AlertProps) => {
  return <Alert {...props}>{children}</Alert>;
};

export default AlertComponent;
