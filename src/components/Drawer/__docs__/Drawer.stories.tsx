import React, { useState } from "react";
import { Meta, Story } from "@storybook/react-vite";
import DrawerBasic from "../Drawer";
import { CustomDrawerProps } from "../types";

export default {
  title: "Components/Drawer",
  component: DrawerBasic,
} as Meta;

const Template: Story<CustomDrawerProps> = (args) => {
  const [open, setOpen] = useState(args.open);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button onClick={toggleDrawer}>Toggle Drawer</button>
      <DrawerBasic {...args} open={open} onClose={toggleDrawer}>
        <div style={{ width: 250, padding: "16px" }}>Drawer Content</div>
      </DrawerBasic>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: false,
  anchor: "left",
  variant: "temporary",
};

export const Permanent = Template.bind({});
Permanent.args = {
  open: true,
  anchor: "left",
  variant: "permanent",
};

export const Persistent = Template.bind({});
Persistent.args = {
  open: false,
  anchor: "left",
  variant: "persistent",
};

export const Responsive: Story<CustomDrawerProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.open);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const drawerVariant = window.innerWidth > 600 ? "persistent" : "temporary";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <DrawerBasic
        {...args}
        open={isOpen}
        onClose={toggleDrawer}
        variant={drawerVariant}
      >
        <div style={{ width: 250, padding: "16px" }}>
          Responsive Drawer Content
        </div>
      </DrawerBasic>

      <div
        style={{
          flex: 1,
          padding: "16px",
          marginLeft: drawerVariant === "persistent" && isOpen ? 240 : 0,
        }}
      >
        <button onClick={toggleDrawer}>
          {isOpen ? "Close Drawer" : "Open Drawer"}
        </button>
      </div>
    </div>
  );
};

Responsive.args = {
  open: false,
  anchor: "left",
};
