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
            allEntries.entries
                .flatMap(({ exercises }) => exercises)
                .filter(({ exercise }) => exercise === chart)
                .map(({ sets, reps }) => ({
                    x: Number(sets),
                    y: Number(reps),
                }))
        );
    }, [allEntries, chart]);

    return chart ? (
        <XYPlot width={500} height={400}>
            <HorizontalGridLines />
            <LineSeries data={chartData} />
            <XAxis />
            <YAxis />
        </XYPlot>
    ) : (
        <p>Fetching chart data</p>
    );
};

const mapStateToProps = (state) => ({
    allEntries: state.allEntries,
});

export default connect(mapStateToProps)(Chart);
