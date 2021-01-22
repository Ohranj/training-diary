import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { XYPlot, LineSeries, XAxis, YAxis, Hint } from "react-vis";

import "../../../node_modules/react-vis/dist/style.css";
import "../../assets/css/chart.css";

import Blurb from "./Blurb";

const Chart = ({ chart, allEntries }) => {
    const [chartData, setChartData] = useState(undefined);
    const [hintData, setHintData] = useState(null);

    const sortDateTicks = (date) => date.split("/").reverse().join("");

    useEffect(() => {
        setChartData(() =>
            allEntries.entries.reduce((acc, cur) => {
                for (let x of cur.exercises) {
                    if (x.exercise === chart) {
                        acc.push({
                            x: cur.date,
                            y: Math.round(
                                Number(x.weight * (36 / (37 - x.reps)))
                            ),
                        });
                    }
                }
                return acc.sort(
                    (a, b) =>
                        Number(sortDateTicks(a.x)) - Number(sortDateTicks(b.x))
                );
            }, [])
        );
    }, [allEntries, chart]);

    return chart && chartData.length > 2 ? (
        <XYPlot
            width={800}
            height={500}
            xType={"ordinal"}
            className="chartPlot"
        >
            <Hint
                value={hintData ? hintData : ""}
                style={{
                    value: {
                        color: "#f2711c",
                    },
                }}
            />
            <LineSeries
                data={chartData}
                stroke={"#f2711c"}
                strokeWidth={5}
                curve={"curveMonotoneX"}
                strokeDasharray={[5, 5]}
                onNearestX={(value) => setHintData(value)}
            />
            <XAxis />
            <YAxis />
        </XYPlot>
    ) : (
        <Blurb />
    );
};

const mapStateToProps = (state) => ({
    allEntries: state.allEntries,
});

export default connect(mapStateToProps)(Chart);
