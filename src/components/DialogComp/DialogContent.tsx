// ud-ui-toolkit
import { DialogContent, DialogContentProps } from "@mui/material";

const DialogContentComp = ({ children, ...props }: DialogContentProps) => {
  return <DialogContent {...props}>{children}</DialogContent>;
};

export default DialogContentComp;
