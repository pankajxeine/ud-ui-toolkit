import Chip from "@mui/material/Chip";
import { IChip } from "./IChip";

/**
 *
 * @param props
 * @returns
 */
export default function MUIChip(props: IChip) {
  const varient = props.variant || "filled";
  return (
    <Chip
      label={props.title}
      variant={varient}
      style={{ border: varient === "filled" ? "0px" : "inherit" }}
      sx={{
        maxWidth: "fit-content",
        height: "24px",
        border: 0,
      }}
      {...props}
    />
  );
}
