import { PropsWithChildren } from "react";
import SVGGraphViewer from "../../modules/SVGGraphViewer";
import { DonutChartData } from "../../types/donutChartData";
import * as Styled from "./DonutGraph.styles";

interface DonutGraphProps {
  data: DonutChartData[];
}

export const DonutGraph = ({
  data,
  ...props
}: PropsWithChildren<DonutGraphProps>): JSX.Element => {
  const paths = new SVGGraphViewer().getDonutChartPaths(data, 0.2);
  return (
    <svg viewBox="-2 -2 4 4" style={{ transform: `rotate(-90deg)` }} {...props}>
      {paths.map(({ pathAttribute, animationAttribute }, idx) => {
        return (
          <path
            key={idx}
            d={pathAttribute.d}
            fill="none"
            strokeWidth={0.4}
            strokeDasharray={`${pathAttribute.targetRad} ${pathAttribute.targetRestRad}`}
            stroke={pathAttribute.color}
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
