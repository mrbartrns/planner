import { PropsWithChildren } from "react";
import SVGGraphViewer from "../../modules/SVGGraphViewer";
import { DonutChartData } from "../../types/donutChartData";
import * as Styled from "./DonutGraph.styles";

interface DonutGraphProps {
  width: number;
  height: number;
}

export const DonutGraph = ({
  width,
  height,
  ...props
}: PropsWithChildren<DonutGraphProps>): JSX.Element => {
  const data: DonutChartData[] = [{ category: "진척도", percent: 0.35 }];
  const color: string[] = ["black"];
  const paths = new SVGGraphViewer().getDonutChartPaths(data, 0.2);
  return (
    <svg
      viewBox="-2 -2 4 4"
      width={width}
      height={height}
      style={{ transform: `rotate(-90deg)` }}
      {...props}
    >
      {paths.map(({ pathAttribute, animationAttribute }, idx) => {
        return (
          <path
            key={idx}
            d={pathAttribute.d}
            fill="none"
            strokeWidth={0.4}
            strokeDasharray={`${pathAttribute.targetRad} ${pathAttribute.targetRestRad}`}
            stroke={color[idx]}
            strokeDashoffset={0.025}
          >
            <animate
              attributeName="stroke-dashoffset"
              begin={animationAttribute.begin}
              from={animationAttribute.from}
              to={0.025}
              dur={animationAttribute.dur}
              fill={"freeze"}
            />
          </path>
        );
      })}
    </svg>
  );
};
