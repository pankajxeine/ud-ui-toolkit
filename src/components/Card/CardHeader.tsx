// ud-ui-toolkit
import { CardHeader as MUICardHeader } from "@mui/material";
import { CardHeaderProps } from "./types";

const CardHeaders = ({ children, ...rest }: CardHeaderProps) => (
  <MUICardHeader {...rest}>{children}</MUICardHeader>
);

export default CardHeaders;
