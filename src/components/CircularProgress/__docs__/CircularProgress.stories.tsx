import React from "react";
import { ComponentStory, Meta } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import { CircularProgress } from '../index'
export default {
  title: "Components/CircularProgress",
  component: CircularProgress,
} as Meta<typeof CircularProgress>;

export const Basic: ComponentStory<typeof CircularProgress> = () => (
  <Stack spacing={2} maxWidth={300}>
    <CircularProgress />
  </Stack>
);
