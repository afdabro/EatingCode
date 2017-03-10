import * as React from "react";
import * as rd3 from "react-d3-library";
import { RadarChart } from "./radar.chart";
import { RadarChartOptions } from "./radar.chart.options";

// tslint:disable-next-line:variable-name
const RD3Component = rd3.Component;

// TODO: Get from data redux store
const data = require("./data.json");

interface IRadarChartState {
    // tslint:disable-next-line:no-any
    d3: any;
}

export class RadarChartComponent extends React.Component<RadarChartOptions, IRadarChartState> {
    private radarChart = new RadarChart();
    private chartSettings: RadarChartOptions;
    constructor(props) {
        super(props);

        // TODO: Migrate chart options to redux
        const options = new RadarChartOptions();
        Object.assign(options, props);
        this.chartSettings = options;
        this.state = { "d3": "" };
    }

    public componentDidMount() {
        this.setState({ "d3": this.radarChart.draw(data, this.chartSettings) });
    }

    public render() {
        return (
            <div>
                <RD3Component data={this.state.d3} />
            </div>
        );
    }
}
