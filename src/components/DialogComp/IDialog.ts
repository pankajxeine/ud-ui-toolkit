// ud-ui-toolkit
import { DialogProps } from "@mui/material/Dialog";

export interface IDialog extends DialogProps {
  title: string;
  bodycontent: string;
  secondaryactionlabel: string;
  primaryactionlabel: string;
}
