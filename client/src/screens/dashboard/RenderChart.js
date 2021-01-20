import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllEntries } from "../../actions/entries";
import { Grid } from "semantic-ui-react";

import ChartSelectorBtns from "./ChartSelectorBtns";

const RenderChart = ({ dispatchAllEntries }) => {
    useEffect(() => {
        dispatchAllEntries();
    }, [dispatchAllEntries]);

    const getActiveChart = (chart) => {
        console.log(chart);
    };

    return (
        <Grid padded>
            <Grid.Row>
                <Grid.Column>
                    <ChartSelectorBtns getActiveChart={getActiveChart} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>chart</Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchAllEntries: () => dispatch(getAllEntries()),
});

export default connect(null, mapDispatchToProps)(RenderChart);
