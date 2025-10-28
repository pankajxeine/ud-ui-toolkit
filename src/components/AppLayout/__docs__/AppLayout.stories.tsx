import React from "react";
import { BrowserRouter, Outlet } from 'react-router-dom'
import { Meta, Story } from "@storybook/react-vite";
import { createTheme } from "@mui/material/styles";
import AppLayoutProvider from "../AppLayoutProvider";
import { AppLayoutProviderProps } from "../ILayout";
import { Branding, Navigation } from "../../../types/ICommon";
import { headerThemeConfig } from "./layoutProps";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeIcon from "@mui/icons-material/Home";
import AppLayout from "../AppLayout";
import { Stack } from "../../Stack";
const branding = {
  appTitle: "Test Application",
  appLogo: "favicon.svg",
  appHomeUrl: "/test",
};

import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>,
  },
  {
    path: '/login',
    element: <h1>login</h1>,
  },

  {
    path: '/calaender',
    element: <h1>Calaender</h1>,
  },
]);

const Theme = {
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const NAVIGATION: Navigation = [
  {
    segment: "home",
    title: "Dashboard",
    icon: <HomeIcon />,
  },
  {
    segment: "calender",
    title: "Calender",
    icon: <CalendarMonthIcon />,
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "abc",
        title: "abc",
        icon: <DescriptionIcon />,
      },
      {
        segment: "xyz",
        title: "xyx",
        icon: <DescriptionIcon />,
      },
    ],
  },
];

const View = () => {
  return (
    <>
      <Stack direction="row" alignItems="center">
        <h6>Left</h6>
      </Stack>
      <Stack direction="row" alignItems="center">
        <h6>Right</h6>
      </Stack>
    </>
  );
};

// Define Storybook metadata
export default {
  title: "Layout/AppLayout",
  component: AppLayoutProvider,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    footerTheme: { ...headerThemeConfig },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<AppLayoutProviderProps> = (args) => {
  return (
    <AppLayoutProvider {...args} theme={theme} navigation={NAVIGATION} router={router}>
      <AppLayout
        hideNavigation={false}
        defaultSidebarCollapsed={true}
        headerTheme={{
          palette: {
            background: {
              paper: "#0C44AE",
              default: "#f6f7f9",
            },
          },
        }}
        footerView={<View />}
        toolbarView={<View />}
      >
        <Outlet />
      </AppLayout>
    </AppLayoutProvider>
  );
};

// Define the default story with sample props
export const Default = Template.bind({});
Default.args = {
  navigation: [
    {
      kind: "header",
      title: "Main items",
    },
    {
      segment: "dashboard",
      title: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      segment: "orders",
      title: "Orders",
      icon: <ShoppingCartIcon />,
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: "Analytics",
    },
    {
      segment: "reports",
      title: "Reports",
      icon: <BarChartIcon />,
      children: [
        {
          segment: "sales",
          title: "Sales",
          icon: <DescriptionIcon />,
        },
        {
          segment: "traffic",
          title: "Traffic",
          icon: <DescriptionIcon />,
        },
      ],
    },
    {
      segment: "integrations",
      title: "Integrations",
      icon: <LayersIcon />,
    },
  ],
};
