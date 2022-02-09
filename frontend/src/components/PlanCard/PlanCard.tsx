import React, { PropsWithChildren } from "react";
import { Schedule, SubSchedule } from "../../types/schedule";
import { Card } from "../Card/Card";
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
import * as Styled from "./PlanCard.styles";

export const PlanCard = ({
  title,
  subTitles,
  deadLine,
  checked,
  description,
  createdAt,
  updatedAt,
  ...props
}: PropsWithChildren<Schedule<SubSchedule>>): JSX.Element => {
  return (
    <Card {...props}>
      <React.Fragment>
        <CardHeader
          action={
            <IconButton
              aria-label="settings"
              sx={{ position: "relative" }}
              onClick={() => {
                // TODO: modify onClick function
                // display Dropdown menu
                console.log("clicked");
              }}
            >
              <MoreVertIcon />
            </IconButton>
          }
          // TODO: format date string
          title={`${deadLine ? `${deadLine}까지` : `기한 없음`}`}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            <Checkbox checked={checked} />
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
          </Typography>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <nav aria-label="main folders">
              <List>
                {subTitles.map((subTitle: SubSchedule, index) => {
                  console.log(subTitle.checked);
                  return (
                    <ListItem disablePadding key={index}>
                      <ListItemButton>
                        <Checkbox
                          checked={subTitle.checked}
                          onClick={() => console.log("checked")}
                        />
                        <Styled.ScheduleListItemText
                          primary={subTitle.title}
                          checked={subTitle.checked}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
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
};
