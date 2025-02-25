import { createTheme } from "@mui/material";
import colors from "./colors";
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...colors.dark
  },
  typography: {
  },
});
