import { CardActions as MUICardActions } from "@mui/material";
import { CardActionsProps } from "./types";

const CardActions = ({ children, ...rest }: CardActionsProps) => (
  <MUICardActions {...rest}>{children}</MUICardActions>
);

export default CardActions;
