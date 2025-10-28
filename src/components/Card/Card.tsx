// ud-ui-toolkit
import { Card as MUICard } from "@mui/material";
import { CardProps } from "./types";

const Card = ({ children, ...rest }: CardProps) => (
  <MUICard {...rest}>{children}</MUICard>
);

export default Card;
