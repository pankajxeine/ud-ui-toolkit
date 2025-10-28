// ud-ui-toolkit
import { SxProps } from "@mui/material";
import { Branding } from "../../types/ICommon";
export interface HeaderProps {
  branding?: Branding;
  hideNavigation: boolean;
  toggleNavigationExpanded: () => void;
  disableCollapsibleSidebar: boolean;
  defaultSidebarCollapsed: boolean;
  isMobileNavigationExpanded: boolean;
  isDesktopNavigationExpanded: boolean;
  headerTheme?: any;
  toolbarView?: React.ReactNode;
  sxStyle?: SxProps;
}
