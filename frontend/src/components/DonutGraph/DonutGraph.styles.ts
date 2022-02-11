import styled, { css } from "styled-components";
import { MAIN_THEME_COLOR } from "../../constants/styles.styles";

interface DonutGraphProps {
  variant?: "default" | "primary" | "secondary" | "tertiary" | "danger";
  strokeWidth: number;
  size?: number;
}

const variantCss = {
  default: css`
    background-color: #333333;
  `,
  primary: css`
    background-color: ${MAIN_THEME_COLOR};
  `,
  secondary: css`
    background-color: #e0e0e0;
  `,
  tertiary: css`
    background-color: #f2cf5a;
  `,
  danger: css`
    background-color: #ff5454;
  `,
};

const svgSizeCss = {
  default: css`
    width: 100px;
    height: 100px;
  `,
  small: css`
    width: 50px;
    height: 50px;
  `,
  medium: css`
    width: 200px;
    height: 200px;
  `,
  large: css`
    width: 300px;
    height: 300px;
  `,
};

export const DonutGraphWrapper = styled.div<DonutGraphProps>`
  width: ${({ size = 100 }) => size}px;
  height: ${({ size = 100 }) => size}px;
`;

// export const DonutGraphOuter = styled.div`
//   background-color: inherit;
// `;

// export const DonutGraphProcess = styled.div<DonutGraphProps>`
//   ${({ variant = "default" }) => variantCss[variant]}
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
// `;

// export const DonutGraphInner = styled.div<DonutGraphInnerProps>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1;
//   ${({ size = 50 }) => `
//     width: ${size}%;
//     height: ${size}%;
//   `}
//   border-radius: 50%;
//   // TODO: modify backgraound color
//   background-color: #fff;
//   text-align: center;
//   word-wrap: break-word;
// `;
