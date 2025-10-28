import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NotificationDrawer from "../NotificationDrawer";
import { Box, Typography, Button, Link } from "@mui/material";

export default {
  title: "Components/NotificationDrawer",
  component: NotificationDrawer,
} as ComponentMeta<typeof NotificationDrawer>;

// Template for stories
const Template: ComponentStory<typeof NotificationDrawer> = (args) => <NotificationDrawer {...args} />;

// Notifications Story
export const Notifications = Template.bind({});
Notifications.args = {
  heading: "Notifications",
  icon: "notifications", 
  type: "icon",
  tooltipContent: "View Notifications",
  showBadge: true,
  badgeContent: 3,
  content: (
    <Box>
      <Typography>🔔 You have new notifications.</Typography>
      <Button fullWidth>Mark All Read</Button>
      <Button fullWidth color="error">
        Clear All
      </Button>
    </Box>
  ),
};

// Emails Story
export const Emails = Template.bind({});
Emails.args = {
  heading: "Emails",
  icon: "mail",
  type: "button",
  tooltipContent: "View Emails",
  showBadge: false, 
  content: (
    <Box>
      <Typography>📧 Here are your emails.</Typography>
    </Box>
  ),
};

// Alerts Story
export const Alerts = Template.bind({});
Alerts.args = {
  heading: "Alerts",
  icon: "error",
  type: "link",
  tooltipContent: "View Alerts",
  showBadge: true,
  badgeContent: 1,
  content: (
    <Box sx={{ p: 2, bgcolor: "#fff3cd", borderRadius: 1 }}>
      <Typography variant="body2" sx={{ color: "#856404", fontWeight: "bold" }}>
        ⚠️ Security Warning
      </Typography>
      <Typography variant="body2" sx={{ color: "#856404", mt: 1 }}>
        Suspicious login detected. Please{" "}
        <Link href="#" sx={{ fontWeight: "bold", color: "#d32f2f" }}>
          change your password
        </Link>{" "}
        immediately.
      </Typography>
      <Button variant="contained" color="error" size="small" sx={{ mt: 2 }}>
        Secure Account
      </Button>
    </Box>
  ),
};

// No Close Button Story
export const NoCloseButton = Template.bind({});
NoCloseButton.args = {
  heading: "No Close",
  icon: "visibility",
  type: "icon",
  tooltipContent: "Open without close button",
  isClose: false, 
  content: (
    <Box>
      <Typography>👀 This drawer has no close button.</Typography>
    </Box>
  ),
};

// Custom Close Handler Story
export const CustomCloseHandler = Template.bind({});
CustomCloseHandler.args = {
  heading: "Custom Close",
  icon: "settings",
  type: "icon",
  tooltipContent: "Drawer with custom close action",
  isClose: true,
  onCloseHandler: () => alert("Custom close action triggered!"),
  content: (
    <Box>
      <Typography>This drawer triggers an alert when closed.</Typography>
    </Box>
  ),
};
