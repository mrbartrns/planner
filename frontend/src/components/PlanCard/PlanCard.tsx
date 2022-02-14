import React, { PropsWithChildren, useState } from "react";
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
  Checkbox,
  ListItemIcon,
} from "@mui/material";
import { MenuItemProp } from "../../types/menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as Styled from "./PlanCard.styles";
import {
  ContentCopy,
  ContentCut,
  SettingsInputSvideo,
} from "@mui/icons-material";
import { DonutChartData } from "../../types/donutChartData";
import { useCountAnimation } from "../../hooks/useCountAnimation";

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
  const [isDropdownMenuOpend, setIsDropdownMenuOpened] =
    useState<boolean>(false);
  const count = useCountAnimation({ percent: 0.35, duration: 0.2 });
  const dropDownItems: MenuItemProp[] = [
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
  ];
  const data: DonutChartData[] = [
    { category: "진척도", percent: 0.35, color: "black" },
  ];
  return (
    <Card
      {...props}
      onClick={(e: any) => {
        if (
          ["path", "svg", "BUTTON", "SPAN"].find(
            (el: string) => el === e.target.tagName,
          )
        )
          return;
        setIsDropdownMenuOpened(false);
      }}
    >
      <React.Fragment>
        <CardHeader
          action={
            <div>
              <Checkbox checked={checked} />
              <IconButton
                className="btn-settings"
                aria-label="settings"
                onClick={() => {
                  setIsDropdownMenuOpened((prev) => {
                    return !prev;
                  });
                }}
              >
                <MoreVertIcon />
              </IconButton>
            </div>
          }
          // TODO: format date string
          title={`${deadLine ? `${deadLine}까지` : `기한 없음`}`}
        />
        <Styled.DropdownMenu items={dropDownItems} open={isDropdownMenuOpend} />
        <CardContent>
          <Styled.FlexBox>
            <Box sx={{ width: "100%", fontFamily: "Noto Sans KR" }}>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {description}
              </Typography>
              <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                <nav aria-label="main folders">
                  <List>
                    {subTitles.map((subTitle: SubSchedule, index) => {
                      return (
                        <ListItem disablePadding key={index}>
                          <ListItemButton>
                            <Styled.ScheduleListItemText
                              primary={subTitle.title}
                              checked={subTitle.checked}
                            />
                            <Checkbox
                              checked={subTitle.checked}
                              onClick={() => console.log("checked")}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </nav>
              </Box>
            </Box>
            <Box style={{ textAlign: "center" }}>
              <Styled.DonutChart data={data} />
              <Typography>{count}% 달성 완료</Typography>
            </Box>
          </Styled.FlexBox>
        </CardContent>
        <CardActions>
          <Button size="small">자세히 보기</Button>
        </CardActions>
      </React.Fragment>
    </Card>
  );
};
