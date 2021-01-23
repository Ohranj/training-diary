import React, { useState } from "react";
import { Popup, Label } from "semantic-ui-react";
import { connect } from "react-redux";

import EditEntryForm from "./EditEntryForm";

const EditEntry = ({ selectedEntry, allEntries }) => {
    const [entry, setEntry] = useState("");

    const handleEntryToEdit = () =>
        setEntry(() =>
            allEntries.entries.find(
                (entry) => entry.date === selectedEntry.date
            )
        );

    return (
        <Popup
            content={<EditEntryForm entry={entry} />}
            on="click"
            position="left center"
            flowing
            size="mini"
            trigger={
                <Label
                    as="button"
                    color="orange"
                    ribbon
                    content="Edit entry"
                    className="editEntryBtn"
                    onClick={() => handleEntryToEdit()}
                />
            }
        />
    );
};

const mapStateToProps = (state) => ({
    allEntries: state.allEntries,
});

export default connect(mapStateToProps)(EditEntry);
