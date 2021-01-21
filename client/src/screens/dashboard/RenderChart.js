import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllEntries } from "../../actions/entries";
import { Grid } from "semantic-ui-react";

import ChartSelectorBtns from "./ChartSelectorBtns";
import Chart from "./Chart";

const RenderChart = ({ dispatchAllEntries }) => {
    const [chart, setChart] = useState(undefined);

    useEffect(() => {
        dispatchAllEntries();
    }, [dispatchAllEntries]);

    const getActiveChart = (chart) => setChart(chart);

    return (
        <Grid padded>
            <Grid.Row>
                <Grid.Column>
                    <ChartSelectorBtns getActiveChart={getActiveChart} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Chart chart={chart} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchAllEntries: () => dispatch(getAllEntries()),
});

export default connect(null, mapDispatchToProps)(RenderChart);
