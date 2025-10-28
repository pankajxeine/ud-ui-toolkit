// Storybook configuration file
import React from "react";
import { Meta, Story } from "@storybook/react";
import Header from "../Header";
import { HeaderProps } from "../IHeader";
import { headerThemeConfig } from "./headerProps";
import { Stack } from "../../Stack";
import Typography from "../../Typography/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Divider from "@mui/material/Divider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { LanguageMenu } from "../../LanguageMenu";
import { AccountMenu } from "../../AccountMenu";
import { Box } from "../../Box";
// Define Storybook metadata

const languages = [
  {
    id: 1,
    code: "eng",
    lang: "English",
    flag: "twemoji:flag-united-kingdom",
  },
  {
    id: 2,
    code: "en-US",
    lang: "English (US)",
    flag: "twemoji:flag-united-states",
  },
  {
    id: 3,
    code: "ban",
    lang: "বাংলা",
    flag: "twemoji:flag-bangladesh",
  },
  {
    id: 4,
    code: "zh",
    lang: "中文",
    flag: "twemoji:flag-china",
  },
  {
    id: 5,
    code: "tr",
    lang: "Türkçe",
    flag: "twemoji:flag-turkey",
  },
];

const menuItems = [
  {
    id: 1,
    title: "View Profile",
    icon: "mingcute:user-2-fill",
  },
  {
    id: 2,
    title: "Account Settings",
    icon: "material-symbols:settings-account-box-rounded",
  },
  {
    id: 3,
    title: "Notifications",
    icon: "ion:notifications",
  },
  {
    id: 4,
    title: "Switch Account",
    icon: "material-symbols:switch-account",
  },
  {
    id: 5,
    title: "Help Center",
    icon: "material-symbols:live-help",
  },
  {
    id: 6,
    title: "Logout",
    icon: "material-symbols:logout",
  },
];

const profile = {
  name: "Pankaj Kumar",
  image: "",
  email: "urbandukan@ud.com",
};

export default {
  title: "Layout/Header",
  component: Header,
  argTypes: {
    footerTheme: { ...headerThemeConfig },
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<HeaderProps> = (args) => {
  const HeaderView = () => {
    return (
      <>
        <Stack direction="row" alignItems="center">
          <h6>CSS</h6>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ pr: 3 }}>
          <LanguageMenu languages={languages} />
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box sx={{ pl: 1 }}>
            <AccountMenu profile={profile} menus={menuItems} />
          </Box>

          {/* <AccountMenu /> */}
        </Stack>
      </>
    );
  };
  return (
    <Header
      {...args}
      sxStyle={{ backgroundColor: "#19857b" }}
      toolbarView={<HeaderView />}
    />
  );
};

// Define the default story with sample props
export const Default = Template.bind({});
Default.args = {
  appTitle: "CSS",
  headerTheme: { ...headerThemeConfig },
  headerLeftPanel: <Typography title="Left panel">Left panel</Typography>,
  headerRightPanel: <Typography title="Right panel">Right panel</Typography>,
  sidebarFooter: <Typography title="Right panel">Right panel</Typography>,
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
