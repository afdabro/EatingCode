import { ScaleOrdinal, scaleOrdinal } from "d3-scale";

export class RadarChartOptions {
    public color?: ScaleOrdinal<string, {}> = scaleOrdinal().range(["#6F257F", "#CA0D59"]);
    public extraWidthX?: number = 100;
    public extraWidthY?: number = 100;
    public factor?: number = 1;
    public factorLegend?: number = .85;
    public h?: number = 600;
    public levels?: number = 3;
    public maxValue?: number = 100;
    public opacityArea?: number = 0.5;
    // tslint:disable-next-line:no-magic-numbers
    public radians?: number = 2 * Math.PI;
    public radius?: number = 5;
    public translateY?: number = 30;
    public translateX?: number = 80;
    public toRight?: number = 5;
    public w?: number = 600;
}
