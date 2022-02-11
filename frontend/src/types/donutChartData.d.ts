export interface DonutChartData {
  category: string;
  percent: number;
}

export interface ArcSVGCommandAttribute {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  isLargeArcFlag: 0 | 1;
}
