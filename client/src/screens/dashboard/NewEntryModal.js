import React, { useState } from "react";
import { Segment, Button, Modal, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { resetState } from "../../actions/newEntry";

import ModalForm from "./ModalForm";
import RenderFormEntry from "./RenderFormEntry";
import SuccessMessage from "../../components/SuccessMessage";
import FailMessage from "../../components/FailMessage";

import addEntry from "../../apis/addEntry";

const NewEntryModalBtn = ({ entry, dispatchReset }) => {
    const [open, setOpen] = useState(false);
    const [entryAdded, setEntryAdded] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = () =>
        addEntry(entry)
            .then(() => setError(false))
            .then(() => setEntryAdded(true))
            .then(() =>
                setTimeout(() => {
                    handleCloseModal();
                }, 2000)
            )
            .catch(() => setError(true));

    const handleCloseModal = () => {
        setEntryAdded(false);
        setError(false);
        setOpen(false);
        dispatchReset();
    };

    return (
        <Segment basic padded>
            <Modal
                closeIcon
                open={open}
                trigger={<Button color="orange">New entry</Button>}
                onClose={() => handleCloseModal()}
                onOpen={() => setOpen(true)}
                dimmer="blurring"
                centered={false}
                size="tiny"
            >
                <Header icon="pin" content="Create Training Entry" />
                <Modal.Content>
                    <ModalForm />
                </Modal.Content>
                <Modal.Actions>
                    {error ? (
                        <FailMessage text="Error - An entry already exists with that date" />
                    ) : null}
                    {entryAdded ? (
                        <SuccessMessage
                            text={"Entry added - Returning to the dashboard"}
                        />
                    ) : (
                        <Button
                            color="orange"
                            onClick={() => handleSubmit()}
                            disabled={!entry.date}
                            content="Submit Entry"
                        />
                    )}
                </Modal.Actions>
                <RenderFormEntry />
            </Modal>
        </Segment>
    );
};

const mapStateToProps = (state) => ({
    entry: state.newEntry,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchReset: () => dispatch(resetState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEntryModalBtn);

//Handle on error when date already exists - do similar to success message
