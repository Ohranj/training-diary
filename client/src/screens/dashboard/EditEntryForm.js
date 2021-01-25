import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleDeleteEntry } from "../../actions/entries";

import EditEntryExercises from "./EditEntryExercises";

const EditEntryForm = ({ entry, dispatchDeleteEntry }) => (
    <Grid>
        <Grid.Row>
            <Grid.Column textAlign="left" width={1}>
                <Icon
                    name="trash"
                    size="large"
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatchDeleteEntry(entry.date)}
                />
            </Grid.Column>
            <Grid.Column
                textAlign="right"
                width={15}
                style={{ alignSelf: "flex-end" }}
            >
                <Header content={entry.date} as="h4" color="orange" />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={1} />
            <Grid.Column width={15}>
                <EditEntryExercises date={entry.date} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const mapDispatchToProps = (dispatch) => ({
    dispatchDeleteEntry: (entry) => dispatch(handleDeleteEntry(entry)),
});

export default connect(null, mapDispatchToProps)(EditEntryForm);
