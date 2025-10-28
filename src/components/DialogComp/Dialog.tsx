// ud-ui-toolkit
import Dialog from "@mui/material/Dialog";
import { IDialog } from "./IDialog";
const DialogComp = ({ children, ...props }: IDialog) => {
  return <Dialog {...props}>{children}</Dialog>;
};

export default DialogComp;
