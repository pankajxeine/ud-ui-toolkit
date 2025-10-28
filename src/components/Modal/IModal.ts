// ud-ui-toolkit
import { ModalOwnProps } from "@mui/material";

export interface IModal extends ModalOwnProps {
  title: string;
  bodycontent: string;
  secondaryactionlabel: string;
  primaryactionlabel: string;
}
