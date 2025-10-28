import React from "react";
import { ComponentStory, Meta } from "@storybook/react-vite";

import SliderWidget, { SliderWidgetProps } from "../SliderWidget";

export default {
  title: "Widget/SliderWidget",
  component: SliderWidget,
} as Meta<typeof SliderWidget>;

const marks = [
  {
    value: 0.7,
    label: '70%',
  },
  {
    value: 0.8,
    label: '80%',
  },
  {
    value: 0.9,
    label: '90%',
  },
  {
    value: 1,
    label: '100%',
  },
  {
    value: 1.1,
    label: '110%',
  },
  {
    value: 1.2,
    label: '120%',
  },
  {
    value: 1.3,
    label: '130%',
  },
];

export const Basic: ComponentStory<typeof SliderWidget> = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [fontSize, setFontSize] = React.useState<number>(1);

  function onChangeCommitted() {
    const html = document.getElementsByTagName('html')[0];
    html.style.fontSize = `${fontSize * 62.5}%`;
  }

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <SliderWidget
      handleClick={handleClick}
      handleClose={handleClose}
      onChangeCommitted={onChangeCommitted}
      marks={marks}
      value={fontSize}
      anchorEl={anchorEl}
      widgetTitle={"Font Size"}
      buttonIcon="font"
      onChangeHandler={(ev, value) => setFontSize(value)}
    />
  )
}
