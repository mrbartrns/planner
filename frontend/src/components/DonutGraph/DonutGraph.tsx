import { PropsWithChildren } from "react";
import * as Styled from "./DonutGraph.styles";

interface DonutGraphProps {
  variant?: "default" | "primary" | "secondary" | "tertiary" | "danger";
  outerSize?: number;
  innerSize?: number;
  children?: React.ReactChild;
}

export const DonutGraph = ({
  variant = "default",
  innerSize = 50,
  outerSize = 100,
  children,
  ...props
}: PropsWithChildren<DonutGraphProps>): JSX.Element => {
  return (
    <svg
      viewBox="0 0 100 100"
      width="200"
      height="200"
      style={{ transform: `rotate(-90deg)` }}
    >
      <circle
        cx="50"
        cy="50"
        r="30"
        fill="transparent"
        stroke="blue"
        stroke-width="15"
      />
    </svg>
  );
};
