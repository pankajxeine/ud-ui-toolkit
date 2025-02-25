import DialogContentText, { DialogContentTextProps } from "@mui/material/DialogContentText";

const DialogContentTextComp = ({
  children,
  ...props
}: DialogContentTextProps) => {
  return <DialogContentText {...props}>{children}</DialogContentText>;
};

export default DialogContentTextComp;
