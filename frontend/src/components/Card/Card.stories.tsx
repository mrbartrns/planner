import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
  IconButton,
  Box,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  Checkbox,
  Divider,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Card } from "./Card";

export default {
  title: "shared/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <React.Fragment>
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            sx={{ position: "relative" }}
            onClick={() => {
              console.log("clicked");
            }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={"2022년 2월 11일까지"}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          <Checkbox />
          Main Content Title
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Description
        </Typography>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Checkbox />
                  <ListItemText primary="Inbox" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Checkbox />
                  <ListItemText primary="Drafts" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Divider />
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Checkbox />
                  <ListItemText primary="Trash" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <Checkbox />
                  <ListItemText primary="Spam" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">자세히 보기</Button>
      </CardActions>
    </React.Fragment>
  </Card>
);

export const Default = Template.bind({});
