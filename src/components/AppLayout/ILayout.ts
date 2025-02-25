import { Theme } from "@mui/material/styles";
import { Navigation } from "../../types/ICommon";
import { SxProps } from "@mui/material";

export type AppTheme = Theme | { light: Theme; dark: Theme };

export interface AppLayoutProviderProps {
  children?: React.ReactNode;
  theme?: AppTheme;
  navigation?: Navigation;
  router?: any,
  window?: Window;
}

export interface AppLayoutProps {
  children: React.ReactNode;
  disableCollapsibleSidebar?: boolean;
  defaultSidebarCollapsed?: boolean;
  hideNavigation?: boolean;
  sidebarExpandedWidth?: number;
  footerView?: React.ReactNode;
  toolbarView?: React.ReactNode;
  headerTheme?: any;
  footerTheme?: any;
  sidebarFooter?: React.ReactNode;
  sx?: SxProps;
  navExpandedToggleHandler?: () => void;
}
