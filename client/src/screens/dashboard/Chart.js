import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "../../../node_modules/react-vis/dist/style.css";
import {
    XYPlot,
    HorizontalGridLines,
    LineSeries,
    XAxis,
    YAxis,
} from "react-vis";

const Chart = ({ chart, allEntries }) => {
    const [chartData, setChartData] = useState(undefined);

    useEffect(() => {
        setChartData(() =>
            allEntries.entries.reduce((acc, cur) => {
                for (let x of cur.exercises) {
                    if (x.exercise === chart) {
                        acc.push({
                            x: new Date(cur.date),
                            y: Number(x.weight * (36 / (37 - x.reps))),
                        });
                    }
                }
                return acc;
            }, [])
        );
    }, [allEntries, chart]);

    return chart ? (
        <XYPlot width={400} height={400} xType="time">
            <HorizontalGridLines />
            <LineSeries data={chartData} />
            <XAxis title="Date" />
            <YAxis title="Est. 1 rep max" />
        </XYPlot>
    ) : (
        <p>Fetching chart data</p>
    );
};

const mapStateToProps = (state) => ({
    allEntries: state.allEntries,
});

export default connect(mapStateToProps)(Chart);
