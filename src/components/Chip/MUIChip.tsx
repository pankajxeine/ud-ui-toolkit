// ud-ui-toolkit
import Chip from "@mui/material/Chip";
import { IChip } from "./IChip";

/**
 *
 * @param props
 * @returns
 */
export default function MUIChip(props: IChip) {
  return (
    <Chip
      label={props.title}
      variant={props.variant}
      sx={{
        maxWidth: "fit-content",
        height: "24px",
        border: 0,
      }}
      {...props}
    />
  );
}
