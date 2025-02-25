import { CardContent as MUICardContent } from "@mui/material";
import { CardContentProps } from "./types";

const CardContent = ({ children, ...rest }: CardContentProps) => (
  <MUICardContent {...rest}>{children}</MUICardContent>
);

export default CardContent;
