// ud-ui-toolkit
import { CardActionArea as MUICardActionArea } from "@mui/material";
import { CardActionsAreaProps } from "./types";

const CardActionsArea = ({ children, ...rest }: CardActionsAreaProps) => (
  <MUICardActionArea {...rest}>{children}</MUICardActionArea>
);

export default CardActionsArea;
