import { ListItemText } from "@mui/material";
import styled from "styled-components";

interface ScheduleListItemTextProps {
  checked: boolean;
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
