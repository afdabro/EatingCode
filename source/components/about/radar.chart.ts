import { select } from "d3-selection";
import { RadarChartOptions } from "./radar.chart.options";

export class RadarChart {

    // TODO: Refactor into smaller reusable components.
    // Source: https://gist.github.com/alandunning/4c36eb1abdb248de34c64f5672afd857
    // Light modifications for Linting errors and React D3 library:
    // Source: http://react-d3-library.github.io/
    public draw(data, options: RadarChartOptions): HTMLDivElement {
        const magic2 = 2;

        const allAxis = (data[0].map((i) => { return i.area; }));
        const total = allAxis.length;
        const radius = options.factor * Math.min(options.w / magic2, options.h / magic2);

        const node = document.createElement("div");

        const g = select(node)
            .append("svg")
            .attr("width", options.w + options.extraWidthX)
            .attr("height", options.h + options.extraWidthY)
            .append("g")
            .attr("transform", "translate(" + options.translateX + "," + options.translateY + ")");

        // Circular segments
        for (let j = 0; j < options.levels; j++) {
            const levelFactor = options.factor * radius * ((j + 1) / options.levels);
            g.selectAll(".levels")
                .data(allAxis)
                .enter()
                .append("svg:line")
                // tslint:disable-next-line:variable-name
                .attr("x1", (_d, i) => { return levelFactor * (1 - options.factor * Math.sin(i * options.radians / total)); })
                // tslint:disable-next-line:variable-name
                .attr("y1", (_d, i) => { return levelFactor * (1 - options.factor * Math.cos(i * options.radians / total)); })
                // tslint:disable-next-line:variable-name
                .attr("x2", (_d, i) => { return levelFactor * (1 - options.factor * Math.sin((i + 1) * options.radians / total)); })
                // tslint:disable-next-line:variable-name
                .attr("y2", (_d, i) => { return levelFactor * (1 - options.factor * Math.cos((i + 1) * options.radians / total)); })
                .attr("class", "line")
                .style("stroke", "grey")
                .style("stroke-opacity", "0.75")
                .style("stroke-width", "0.3px")
                .attr("transform", "translate(" + (options.w / magic2 - levelFactor) + ", " + (options.h / magic2 - levelFactor) + ")");
        }

        // Text indicating at what % each level is
        for (let j = 0; j < options.levels; j++) {
            const levelFactor = options.factor * radius * ((j + 1) / options.levels);
            g.selectAll(".levels")
                .data([1])
                .enter()
                .append("svg:text")
                .attr("x", () => { return levelFactor * (1 - options.factor * Math.sin(0)); })
                .attr("y", () => { return levelFactor * (1 - options.factor * Math.cos(0)); })
                .attr("class", "legend")
                .style("font-family", "sans-serif")
                .style("font-size", "10px")
                .attr("transform", "translate(" + (options.w / magic2 - levelFactor + options.toRight) + ", " + (options.h / magic2 - levelFactor) + ")")
                .attr("fill", "#737373")
                // tslint:disable-next-line:no-magic-numbers
                .text(Math.floor((j + 1) * 100 / options.levels));
        }

        let series = 0;

        const axis = g.selectAll(".axis")
            .data(allAxis)
            .enter()
            .append("g")
            .attr("class", "axis");

        axis.append("line")
            .attr("x1", options.w / magic2)
            .attr("y1", options.h / magic2)
            // tslint:disable-next-line:variable-name
            .attr("x2", (_d, i) => { return options.w / magic2 * (1 - options.factor * Math.sin(i * options.radians / total)); })
            // tslint:disable-next-line:variable-name
            .attr("y2", (_d, i) => { return options.h / magic2 * (1 - options.factor * Math.cos(i * options.radians / total)); })
            .attr("class", "line")
            .style("stroke", "grey")
            .style("stroke-width", "1px");

        axis.append("text")
            .attr("class", "legend")
            // tslint:disable-next-line:no-shadowed-variable
            .text((d: string) => { return d; })
            .style("font-family", "sans-serif")
            .style("font-size", "11px")
            .attr("text-anchor", "middle")
            .attr("dy", "1.5em")
            .attr("transform", () => { return "translate(0, -10)"; })
            // tslint:disable-next-line:variable-name no-magic-numbers
            .attr("x", (_d, i) => { return options.w / magic2 * (1 - options.factorLegend * Math.sin(i * options.radians / total)) - 60 * Math.sin(i * options.radians / total); })
            // tslint:disable-next-line:variable-name no-magic-numbers
            .attr("y", (_d, i) => { return options.h / magic2 * (1 - Math.cos(i * options.radians / total)) - 20 * Math.cos(i * options.radians / total); });

        data.forEach((y) => {
            const dataValues = [];
            g.selectAll(".nodes")
                .data(y, (j: { value: number }, i) => {

                    dataValues.push([
                        options.w / magic2 * (1 - (parseFloat(Math.max(j.value, 0) + "") / options.maxValue) * options.factor * Math.sin(i * options.radians / total)),
                        options.h / magic2 * (1 - (parseFloat(Math.max(j.value, 0) + "") / options.maxValue) * options.factor * Math.cos(i * options.radians / total)),
                    ]);
                    return "";
                });
            dataValues.push(dataValues[0]);
            g.selectAll(".area")
                .data([dataValues])
                .enter()
                .append("polygon")
                .attr("class", "radar-chart-serie" + series)
                .style("stroke-width", "2px")
                .style("stroke", options.color(series + "").toString())
                // tslint:disable-next-line:no-shadowed-variable
                .attr("points", (d) => {
                    let str = "";
                    for (const pti of d) {
                        str = str + pti[0] + "," + pti[1] + " ";
                    }
                    return str;
                })
                // tslint:disable-next-line:variable-name
                .style("fill", (_j, _i) => { return options.color(series + "").toString(); })
                .style("fill-opacity", options.opacityArea);
            series++;
        });
        series = 0;

        data.forEach((y) => {
            const dataValues = [];

            g.selectAll(".nodes")
                .data(y).enter()
                .append("svg:circle")
                .attr("class", "radar-chart-serie" + series)
                .attr("r", options.radius)
                .attr("alt", (j: { value: number }) => { return Math.max(j.value, 0); })
                .attr("cx", (j: { value: number }, i) => {
                    dataValues.push([
                        options.w / magic2 * (1 - (parseFloat(Math.max(j.value, 0) + "") / options.maxValue) * options.factor * Math.sin(i * options.radians / total)),
                        options.h / magic2 * (1 - (parseFloat(Math.max(j.value, 0) + "") / options.maxValue) * options.factor * Math.cos(i * options.radians / total)),
                    ]);
                    return options.w / magic2 * (1 - (Math.max(j.value, 0) / options.maxValue) * options.factor * Math.sin(i * options.radians / total));
                })
                .attr("cy", (j: { value: number }, i) => {
                    return options.h / magic2 * (1 - (Math.max(j.value, 0) / options.maxValue) * options.factor * Math.cos(i * options.radians / total));
                })
                .attr("data-id", (j: { area }) => { return j.area; })
                .style("fill", "#fff")
                .style("stroke-width", "2px")
                // tslint:disable-next-line:no-magic-numbers
                .style("stroke", options.color(series + "").toString()).style("fill-opacity", .9);

            series++;
        });

        return node;
    }
};
