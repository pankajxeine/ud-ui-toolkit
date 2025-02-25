import * as React from "react";
import { createTheme as createMuiTheme, Theme } from "@mui/material/styles";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Authentication, Session } from "../../types/IAuth";
import { NavigationContext, WindowContext } from "../../context/Context";
import AppThemeProvider from "./AppThemeProvider";
import { AppLayoutProviderProps } from "./ILayout";

export const AuthenticationContext = React.createContext<Authentication | null>(
  null,
);

export const SessionContext = React.createContext<Session | null>(null);

function createTheme(): Theme {
  return createMuiTheme({
    cssVariables: {
      colorSchemeSelector: "data-eworldes-template-color-scheme",
    },
    colorSchemes: { dark: true },
  });
}

const AppLayoutProvider = (props: AppLayoutProviderProps) => {
  const {
    children,
    theme = createTheme(),
    navigation = [],
    window: appWindow,
  } = props;

  console.log("applayout");
  return (
    <WindowContext.Provider value={appWindow}>
      <AppThemeProvider theme={theme} window={appWindow}>
        <NavigationContext.Provider value={navigation}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
          </LocalizationProvider>
        </NavigationContext.Provider>
      </AppThemeProvider>
    </WindowContext.Provider>
  );
};

export default AppLayoutProvider;
