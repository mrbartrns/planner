import {
  DonutChartData,
  ArcSVGCommandAttribute,
} from "../types/donutChartData";
class SVGGraphViewer {
  /**
   * 실수 (percent)를 입력받아 삼각함수 좌표계로 변환하는 메소드
   * @param percent (0, 1) 사이의 실수
   * @returns 삼각함수 좌표계로 변환된 x, y 좌표
   */
  _getCoordinatesForPercent(percent: number): number[] {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  }

  getDonutChartPaths(data: DonutChartData[], animationDuration = 0) {
    let accumulatedPercent = 0;
    const paths = data.map(({ percent, color }: DonutChartData, idx) => {
      const [startX, startY] =
        this._getCoordinatesForPercent(accumulatedPercent);
      // draw area of stroke-dasharray
      const targetRad = 2 * Math.PI * percent;
      // erased area of stroke-dasharray
      const targetRestRad = 2 * Math.PI * (1 - percent);

      accumulatedPercent += percent;
      const [endX, endY] = this._getCoordinatesForPercent(accumulatedPercent);
      const isLargeArcFlag = percent > 0.5 ? 1 : 0;
      const pathAttribute = {
        ...this._getDonutChartPath({
          startX,
          startY,
          endX,
          endY,
          isLargeArcFlag,
        }),
        targetRad,
        targetRestRad,
        color,
      };
      const animationAttribute = this._getDonutChartAnimation(
        targetRad,
        idx,
        animationDuration,
      );
      return { pathAttribute, animationAttribute };
    });
    return paths;
  }

  /**
   *
   * @param percent (0, 1) range of number
   * @param targetRad (0, 1) range of number
   * @param animationDuration (0, 1) range of numbre
   */
  _getDonutChartAnimation(
    targetRad: number,
    idx: number,
    animationDuration: number,
  ) {
    return {
      attributeName: "stroke-dashoffset",
      begin: animationDuration * idx,
      from: targetRad,
      to: 0.025,
      dur: animationDuration,
      fill: "freeze",
    };
  }

  _getDonutChartPath({
    startX,
    startY,
    endX,
    endY,
    isLargeArcFlag,
  }: ArcSVGCommandAttribute) {
    return {
      d: `M ${startX} ${startY} A 1 1 0 ${isLargeArcFlag} 1 ${endX} ${endY} L 0 0`,
    };
  }
}

export default SVGGraphViewer;
