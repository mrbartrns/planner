import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DonutGraph } from "./DonutGraph";

export default {
  title: "shared/DonutGraph",
  component: DonutGraph,
} as ComponentMeta<typeof DonutGraph>;

const Template: ComponentStory<typeof DonutGraph> = (args) => (
  <DonutGraph {...args} />
);

export const Default = Template.bind({});
