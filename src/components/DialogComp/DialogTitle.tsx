// ud-ui-toolkit
import { DialogTitle, DialogTitleProps } from "@mui/material";

const DialogTitleComp = ({ children, ...props }: DialogTitleProps) => {
  return <DialogTitle {...props}>{children}</DialogTitle>;
};

export default DialogTitleComp;
