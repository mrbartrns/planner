import { ListItemText } from "@mui/material";
import Menu from "../Menu/Menu";
// import { styled } from "@mui/material/styles";
import styled from "styled-components";

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
  }
`;
