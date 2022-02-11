import { ListItemText, Box } from "@mui/material";
import Menu from "../Menu/Menu";
// import { styled } from "@mui/material/styles";
import styled from "styled-components";
import { DonutGraph } from "../DonutGraph/DonutGraph";

interface ScheduleListItemTextProps {
  checked: boolean;
}

interface DropdownMenuProps {
  open: boolean;
}

export const ScheduleListItemText = styled(
  ListItemText,
)<ScheduleListItemTextProps>`
  ${({ checked }) =>
    checked
      ? `
    text-decoration-line: line-through;
    color: #bdbdbd;
  `
      : ``}
`;

export const DropdownMenu = styled(Menu)<DropdownMenuProps>`
  && {
    ${({ open }) => (open ? `display: block;` : `display: none;`)}
    position: absolute;
    z-index: 100;
    right: 30px;

    @media (max-width: 414px) {
      width: 10rem;
    }
  }
`;

export const FlexBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Noto Sans KR";
  @media (max-width: 414px) {
    flex-direction: column;
  }
`;

export const DonutChart = styled(DonutGraph)`
  max-width: 300px;
`;
