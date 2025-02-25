import DialogTitle, { DialogTitleProps } from "@mui/material/DialogTitle";

const DialogTitleComp = ({ children, ...props }: DialogTitleProps) => {
  return <DialogTitle {...props}>{children}</DialogTitle>;
};

export default DialogTitleComp;
