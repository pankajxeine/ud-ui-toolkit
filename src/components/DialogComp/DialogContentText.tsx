// ud-ui-toolkit
import { DialogContentText, DialogContentTextProps } from "@mui/material";

const DialogContentTextComp = ({
  children,
  ...props
}: DialogContentTextProps) => {
  return <DialogContentText {...props}>{children}</DialogContentText>;
};

export default DialogContentTextComp;
