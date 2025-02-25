import MUIList from "@mui/material/List";
import { ListProps } from "./types";

/**
 * Wrapper component for MUI List.
 *
 * @param props MUI List properties extended with custom props.
 * @returns JSX.Element
 */
export default function List(props: ListProps) {
  const { children, ...rest } = props;

  return <MUIList {...rest}>{children}</MUIList>;
}
