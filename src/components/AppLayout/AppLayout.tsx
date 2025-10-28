import { useTheme } from "@mui/material";
import type { } from "@mui/material/themeCssVarsAugmentation";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import { Box } from "../Box";
import { Toolbar } from "../Toolbar";

import {
  NavigationContext,
  WindowContext,
} from "../../context/Context";

import Footer from "../Footer/Footer";
import { Header } from "../Header";
import { SidebarNavigationDrawer } from "../SidebarNavigation";
import { AppLayoutProps } from "./ILayout";

export interface SidebarFooterProps {
  mini: boolean;
}

const AppLayout = (props: AppLayoutProps) => {
  const {
    children,
    disableCollapsibleSidebar = false,
    defaultSidebarCollapsed = false,
    hideNavigation = false,
    sidebarExpandedWidth = 320,
    footerView,
    headerTheme,
    footerTheme,
    toolbarView,
    sidebarFooter,
    navExpandedToggleHandler,
    sx,
  } = props;

  const theme = useTheme();
  const navigationContext = React.useContext(NavigationContext);
  const appWindowContext = React.useContext(WindowContext);

  const navigation = navigationContext;

  const [isDesktopNavigationExpanded, setIsDesktopNavigationExpanded] =
    React.useState(!defaultSidebarCollapsed);
  const [isMobileNavigationExpanded, setIsMobileNavigationExpanded] =
    React.useState(false);

  const FooterView = footerView ?? null;
  const isUnderMdViewport = useMediaQuery(
    theme.breakpoints.down("md"),
    appWindowContext && {
      matchMedia: appWindowContext.matchMedia,
    },
  );
  const isOverSmViewport = useMediaQuery(
    theme.breakpoints.up("sm"),
    appWindowContext && {
      matchMedia: appWindowContext.matchMedia,
    },
  );

  const isNavigationExpanded = isUnderMdViewport
    ? isMobileNavigationExpanded
    : isDesktopNavigationExpanded;

  const setIsNavigationExpanded = React.useCallback(
    (newExpanded: boolean) => {
      if (isUnderMdViewport) {
        setIsMobileNavigationExpanded(newExpanded);
      } else {
        setIsDesktopNavigationExpanded(newExpanded);
      }
    },
    [isUnderMdViewport],
  );

  const [isNavigationFullyExpanded, setIsNavigationFullyExpanded] =
    React.useState(isNavigationExpanded);

  React.useEffect(() => {
    if (isNavigationExpanded) {
      const drawerWidthTransitionTimeout = setTimeout(() => {
        setIsNavigationFullyExpanded(true);
      }, theme.transitions.duration.enteringScreen);

      return () => clearTimeout(drawerWidthTransitionTimeout);
    }

    setIsNavigationFullyExpanded(false);

    return () => { };
  }, [isNavigationExpanded, theme]);

  const selectedItemIdRef = React.useRef("");

  const handleSetNavigationExpanded = React.useCallback(
    (newExpanded: boolean) => () => {
      setIsNavigationExpanded(newExpanded);
    },
    [setIsNavigationExpanded],
  );

  const toggleNavigationExpanded = React.useCallback(() => {
    navExpandedToggleHandler && navExpandedToggleHandler();
    setIsNavigationExpanded(!isNavigationExpanded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNavigationExpanded, setIsNavigationExpanded]);

  const handleNavigationLinkClick = React.useCallback(() => {
    selectedItemIdRef.current = "";
    setIsMobileNavigationExpanded(false);
  }, [setIsMobileNavigationExpanded]);

  React.useMemo(() => {
    if (navigation) {
      selectedItemIdRef.current = "";
    }
  }, [navigation]);

  const hasDrawerTransitions =
    isOverSmViewport && (disableCollapsibleSidebar || !isUnderMdViewport);

  const layoutRef = React.useRef<Element | null>(null);

  return (
    <Box
      ref={layoutRef}
      sx={{
        position: "relative",
        display: "flex",
        overflow: "hidden",
        height: "100vh",
        ...sx,
      }}
    >
      <Header
        hideNavigation={hideNavigation}
        headerTheme={headerTheme}
        toolbarView={toolbarView}
        disableCollapsibleSidebar={disableCollapsibleSidebar}
        defaultSidebarCollapsed={defaultSidebarCollapsed}
        toggleNavigationExpanded={toggleNavigationExpanded}
        isDesktopNavigationExpanded={isDesktopNavigationExpanded}
        isMobileNavigationExpanded={isMobileNavigationExpanded}
      />

      {!hideNavigation && (
        <SidebarNavigationDrawer
          sidebarExpandedWidth={sidebarExpandedWidth}
          disableCollapsibleSidebar={disableCollapsibleSidebar}
          isDesktopNavigationExpanded={isDesktopNavigationExpanded}
          isMobileNavigationExpanded={isMobileNavigationExpanded}
          isNavigationExpanded={isNavigationExpanded}
          hasDrawerTransitions={hasDrawerTransitions}
          isNavigationFullyExpanded={isNavigationFullyExpanded}
          sidebarFooter={sidebarFooter}
          handleNavigationLinkClick={handleNavigationLinkClick}
          handleSetNavigationExpanded={handleSetNavigationExpanded}
          selectedItemIdRef={selectedItemIdRef}
          layoutRef={layoutRef}
          navigation={navigation}
        />
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minWidth: 0,
          bgcolor: "inherit"
        }}
      >
        <Toolbar sx={{ displayPrint: "none" }} />
        <Box
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            overflow: "auto",
            bgcolor: "inherit"
          }}
        >
          {children}
          {FooterView && (
            <Footer footerTheme={footerTheme}>{FooterView}</Footer>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
