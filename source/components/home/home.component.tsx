import * as React from "react";
import { RadarChartComponent } from "./radar.chart.component";
const dimension = 600;

export const homeComponent = () => {
    return (<div id="chart"><p>Welcome</p>
        <RadarChartComponent w={dimension} h={dimension}/>
    </div>);
};
