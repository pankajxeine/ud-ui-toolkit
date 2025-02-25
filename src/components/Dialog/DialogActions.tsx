import DialogActions, { DialogActionsProps } from "@mui/material/DialogActions";

const DialogActionComp = ({ children, ...props }: DialogActionsProps) => {
  return <DialogActions {...props}>{children}</DialogActions>;
};

export default DialogActionComp;
