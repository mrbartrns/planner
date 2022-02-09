import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PlanCard } from "./PlanCard";

export default {
  title: "shared/PlanCard",
  component: PlanCard,
} as ComponentMeta<typeof PlanCard>;

const Template: ComponentStory<typeof PlanCard> = (args) => (
  <PlanCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Study React",
  checked: true,
  deadLine: Date.now(),
  description: "리액트 프로젝트 공부",
  subTitles: [
    { title: "컴포넌트 만들기", checked: false },
    { title: "hooks 공부하기", checked: true },
  ],
};
