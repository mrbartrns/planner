import styled, { css } from "styled-components";
import { MAIN_THEME_COLOR } from "../../constants/styles.styles";

interface DonutGraphProps {
  variant?: "default" | "primary" | "secondary" | "tertiary" | "danger";
  strokeWidth: number;
  size?: number;
}
