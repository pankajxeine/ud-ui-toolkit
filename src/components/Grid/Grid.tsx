import Grid from "@mui/material/Grid2";
import { GridProps } from "./types";

const GridBasic = ({ children, ...props }: GridProps) => {
  return <Grid {...props}>{children}</Grid>;
};

export default GridBasic;
