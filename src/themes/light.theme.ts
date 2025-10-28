// ud-ui-toolkit
import { createTheme } from "@mui/material";
import colors from "./colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...colors.light,
  },
  typography: {
  },
});
// rgb(250, 250, 250)
