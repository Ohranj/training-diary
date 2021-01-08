import React from "react";
import { Segment, Input, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { addDate } from "../../actions/newEntry";

const SubmitNewEntryBtn = ({ dispatchDate, entry }) => (
    <Segment basic size="small" textAlign="right">
        {!entry.date ? (
            <Label
                pointing="right"
                color="orange"
                horizontal
                content="Add a date"
            />
        ) : null}
        <Input
            type="date"
            size="small"
            onChange={(e, { value }) => dispatchDate(value)}
        />
    </Segment>
);

const mapDispatchToProps = (dispatch) => ({
    dispatchDate: (date) => dispatch(addDate(date)),
});

const mapStateToProps = (state) => ({
    entry: state.newEntry,
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitNewEntryBtn);
