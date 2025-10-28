// ud-ui-toolkit
import type { PaletteMode } from "@mui/material";
import * as React from "react";
import type { Navigation } from "../types/ICommon";

export const AppContext = React.createContext({});

export const NavigationContext = React.createContext<Navigation>([]);

export const PaletteModeContext = React.createContext<{
  paletteMode: PaletteMode;
  setPaletteMode: (mode: PaletteMode) => void;
  isDualTheme: boolean;
}>({
  paletteMode: "light",
  setPaletteMode: () => { },
  isDualTheme: false,
});

// export const RouterContext = React.createContext<Router | null>(null);

export const WindowContext = React.createContext<Window | undefined>(undefined);
