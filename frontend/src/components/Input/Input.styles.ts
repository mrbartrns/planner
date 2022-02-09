import styled from "styled-components";
import {
  MAIN_THEME_COLOR,
  MAIN_THEME_COLOR_LIGHTER,
} from "../../constants/styles.styles";

export const TextInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem;
  border: 1px solid rgb(118, 118, 118);
  border-radius: 5px;
  &:hover {
    border: 1px solid ${MAIN_THEME_COLOR_LIGHTER};
    outline: none;
  }
  &:focus {
    border: 1px solid ${MAIN_THEME_COLOR};
    outline: none;
  }
  transition: border-color 0.2s;
`;
