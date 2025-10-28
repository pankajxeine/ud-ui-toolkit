// ud-ui-toolkit
import { DialogActions, DialogActionsProps } from "@mui/material";

const DialogActionComp = ({ children, ...props }: DialogActionsProps) => {
  return <DialogActions {...props}>{children}</DialogActions>;
};

export default DialogActionComp;
