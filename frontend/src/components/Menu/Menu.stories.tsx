import Menu from "./Menu";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ContentCopy, ContentCut } from "@mui/icons-material";

export default {
  title: "shared/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: "Cut",
      secondaryTitle: "⌘X",
      icon: (
        <ListItemIcon>
          <ContentCut fontSize="small" />
        </ListItemIcon>
      ),
      action: () => {
        console.log("clicked Cut menu");
      },
    },
    {
      title: "Copy",
      secondaryTitle: "⌘C",
      icon: (
        <ListItemIcon>
          <ContentCopy fontSize="small" />
        </ListItemIcon>
      ),
      action: () => {
        console.log("clicked Copy menu");
      },
    },
  ],
};
