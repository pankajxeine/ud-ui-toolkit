import React from "react";
import { ComponentStory, Meta } from "@storybook/react-vite";
import { Stack } from '../index'

export default {
  title: "Components/Stack",
  component: Stack,
} as Meta<typeof Stack>;

export const BasicStack: ComponentStory<typeof Stack> = () => (
  <Stack spacing={2}>
    <h2>h2 1</h2>
    <h2>h2 2</h2>
    <h2>h2 3</h2>
  </Stack>
);
