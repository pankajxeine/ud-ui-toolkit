import DialogContent, { DialogContentProps } from "@mui/material/DialogContent";

const DialogContentComp = ({ children, ...props }: DialogContentProps) => {
  return <DialogContent {...props}>{children}</DialogContent>;
};

export default DialogContentComp;
