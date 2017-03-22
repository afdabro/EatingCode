import * as React from "react";
import * as Helmet from "react-helmet";
import { RadarChartComponent } from "./radar.chart.component";
const dimension = 600;

export const homeComponent = () => {
    return (<div>
        <Helmet meta={[{ "name": "description", "content": "Welcome to Eating Code for Breakfast!" }]}/>
        <RadarChartComponent w={dimension} h={dimension} />
    </div>);
};
