import React from "react";
import { ComponentStory, Meta } from "@storybook/react-vite";

import FullScreenToggle from "../FullScreenToggle";

export default {
  title: "Widget/FullScreenToggle",
  component: FullScreenToggle,
} as Meta<typeof FullScreenToggle>;

export const Basic: ComponentStory<typeof FullScreenToggle> = () => {

  return (
    <FullScreenToggle />
  )
}
