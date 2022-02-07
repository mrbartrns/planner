import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "text", "default"],
      control: { type: "radio" },
    },
    shape: {
      options: ["round", "default"],
      control: { type: "radio" },
    },
    size: {
      options: ["dense", "small", "medium", "large"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  variant: "default",
  size: "medium",
  shape: "default",
  fullWidth: false,
  children: "Button Test",
};

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  variant: "primary",
  size: "large",
  shape: "default",
  fullWidth: false,
  children: "Button Test",
};
