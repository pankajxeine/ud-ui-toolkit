// ud-ui-toolkit
import { Stack } from "@mui/material";
import { IChipProp } from "./IChip";
import Chip from "./MUIChip";

/**
 *
 * @param param0
 * @returns
 */
export default function BasicChips({
  direction = "row",
  varient = "filled",
  ...props
}: IChipProp) {
  return (
    <Stack direction={direction} spacing={1}>
      {props?.values?.map((prop) => (
        <Chip
          {...prop}
          key={prop.title}
          variant={varient}
          sx={{ border: 0, height: "24px" }}
        />
      ))}
    </Stack>
  );
}
