import Dialog, { DialogProps } from "@mui/material/Dialog";

const DialogComp = ({ children, ...props }: DialogProps) => {
  return <Dialog {...props}>{children}</Dialog>;
};

export default DialogComp;
