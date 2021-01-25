import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleDeleteEntry } from "../../actions/entries";

import EditEntryExercises from "./EditEntryExercises";

const EditEntryForm = ({ entry, dispatchDeleteEntry }) => (
    <Grid className="editEntry">
        <Grid.Row>
            <Grid.Column textAlign="left" width={1}>
                <Icon
                    name="trash"
                    size="large"
                    onClick={() => dispatchDeleteEntry(entry.date)}
                />
            </Grid.Column>
            <Grid.Column textAlign="right" width={15}>
                <Header content={entry.date} as="h4" color="orange" />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <EditEntryExercises date={entry.date} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const mapDispatchToProps = (dispatch) => ({
    dispatchDeleteEntry: (entry) => dispatch(handleDeleteEntry(entry)),
});

export default connect(null, mapDispatchToProps)(EditEntryForm);
