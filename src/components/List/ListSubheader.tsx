// ud-ui-toolkit
import MUIListSubheader from "@mui/material/ListSubheader";
import { ListSubheaderProps } from "./types";

export default function ListSubheader(props: ListSubheaderProps) {
  const { children, ...rest } = props;

  return <MUIListSubheader {...rest}>{children}</MUIListSubheader>;
}
