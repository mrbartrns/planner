import styled, { css } from "styled-components";
import {
  DEFAULT_BORDER_RADIUS,
  MAIN_THEME_COLOR,
} from "../../constants/styles.styles";

// Button의 프롭들을 공통적으로 공유하는 속성으로 묶고, 이에 따라 카테고리를 나눈다.
interface Props {
  variant: "primary" | "text" | "default";
  shape: "round" | "default";
  size: "dense" | "small" | "medium" | "large";
  fullWidth: boolean;
}

const variantCss = {
  primary: css`
    background-color: ${MAIN_THEME_COLOR};
    color: white;
    &: disabled {
      background-color: #e0e0e0;
      color: #bdbdbd;
    }
  `,
  text: css`
    background: transparent;
    color: #333;
    &:disabled {
      color: #bdbdbd;
    }
  `,
  default: css`
    background: transparent;
    color: #333;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    &: disabled {
      background-color: #e0e0e0;
      color: #bdbdbd;
    }
  `,
};

const shapeCss = {
  round: css`
    border-radius: 10px;
  `,
  default: css`
    border-radius: ${DEFAULT_BORDER_RADIUS};
  `,
};

const sizeCss = {
  dense: css`
    padding: 0 0.5rem;
  `,
  small: css`
    padding: 0.25rem 0.5rem;
  `,
  medium: css`
    padding: 0.625rem 0.85rem;
  `,
  large: css`
    padding: 0.75rem 1rem;
  `,
};

export const Button = styled.button<Props>`
  ${({ variant }) => variantCss[variant]}
  ${({ shape }) => shapeCss[shape]}
  ${({ size }) => sizeCss[size]}
  width: ${(fullWidth) => (fullWidth ? `100%` : "auto")};
  cursor: pointer;
  border: 0;
  font-weight: 600;
  &:disabled {
    cursor: default;
  }
  transiton: all 0.2s;
`;
