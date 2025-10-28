// ud-ui-toolkit
// src/theme.d.ts or relevant types file
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    pageBodyColor?: {
      default: string;
    };
    pageHeaderBGColor?: {
      default: string;
    };
  }

  interface ThemeOptions {
    pageBodyColor?: {
      default: string;
    };
    pageHeaderBGColor?: {
      default: string;
    };
  }
}
