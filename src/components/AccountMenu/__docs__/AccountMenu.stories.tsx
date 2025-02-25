// Storybook configuration file
import React from "react";
import { Meta, Story } from "@storybook/react";
import AccountMenu from "../AccountMenu";
import { ProfileMenu } from "../AccountMenu";

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
  email: "pKumar@eworldes.com",
};

// Define Storybook metadata
export default {
  title: "Layout/AcountMenu",
  component: AccountMenu,
  argTypes: {
    menus: menuItems,
    profile: profile,
  },
} as Meta;

// Template function to create the component with different args
const Template: Story<ProfileMenu> = (args) => {
  return <AccountMenu {...args} />;
};

// Define the default story with sample props
export const Default = Template.bind({});
Default.args = {
  menus: menuItems,
  profile: profile,
};
