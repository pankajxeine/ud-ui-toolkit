import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import DividerBasic from "../Divider";
import { Chip } from "../../Chip";


export default {
  title: "Components/Divider",
  component: DividerBasic,
} as Meta<typeof DividerBasic>;

const content = (
  <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
);
export const BasicDivider: ComponentStory<typeof DividerBasic> = () => (


  <>
    {content}
    <DividerBasic>CENTER</DividerBasic>
    {content}
    <DividerBasic textAlign="left">LEFT</DividerBasic>
    {content}
    <DividerBasic textAlign="right">RIGHT</DividerBasic>
    {content}
    <DividerBasic>
      <Chip title="121" />
    </DividerBasic>
    {content}
  </>

);
