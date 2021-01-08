import React, { useState } from "react";
import { Segment, Button, Modal, Header } from "semantic-ui-react";
import { connect } from "react-redux";

import ModalForm from "./ModalForm";
import RenderFormEntry from "./RenderFormEntry";

const NewEntryModalBtn = ({ entry }) => {
    const [open, setOpen] = useState(false);

    const handleSubmit = () => {
        console.log(entry);
        setOpen(false);
    };

    return (
        <Segment basic padded>
            <Modal
                closeIcon
                open={open}
                trigger={<Button color="orange">New entry</Button>}
                onClose={() => setOpen(false)}
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
                    <Button color="orange" onClick={() => handleSubmit()}>
                        Submit Entry
                    </Button>
                </Modal.Actions>
                <RenderFormEntry />
            </Modal>
        </Segment>
    );
};

const mapStateToProps = (state) => ({
    entry: state.newEntry,
});

export default connect(mapStateToProps)(NewEntryModalBtn);
