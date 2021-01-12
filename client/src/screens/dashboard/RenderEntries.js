import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllEntries } from "../../actions/entries";
import { Grid } from "semantic-ui-react";

const RenderEntries = ({ dispatchAllEntries, allEntries }) => {
    useEffect(() => {
        dispatchAllEntries();
    }, [dispatchAllEntries]);

    useEffect(() => {
        console.log(allEntries);
    }, [allEntries]);

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>Render entries</Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchAllEntries: () => dispatch(getAllEntries()),
});

const mapStateToProps = (state) => ({
    allEntries: state.allEntries,
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderEntries);
