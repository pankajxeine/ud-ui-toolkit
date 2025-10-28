import React from 'react';
import {MultiSelect,IMultiselect} from '../index'; 
import { Meta, StoryObj } from "@storybook/react";
import {multiSelectDefault,multiSelectChip,multiSelectCheckbox}  from "./MultiSelectSchema";
// Storybook meta configuration
export default {
  title: 'Components/MultipleSelect',
  component: MultiSelect,
  argTypes: {
    options: {
      control: 'array',
      description: 'Array of options for the select component',
    },
    value: {
      control: 'array',
      description: 'Array of selected values',
    },
    label: {
      control: 'text',
      description: 'Label for the select input',
    },
    selectType: {
        options: ['chip', 'checkbox', 'none'],
        control: { type: 'select' },
    },
  },
}as Meta;


const Template = (args) => (
  <MultiSelect {...args}  />
);
export const Default : StoryObj<IMultiselect> = {
  render: Template,
  args: multiSelectDefault,
};

export const Chip : StoryObj<IMultiselect> = {
  render: Template,
  args: multiSelectChip,
};


export const Checkbox : StoryObj<IMultiselect> = {
  render: Template,
  args: multiSelectCheckbox,
};


