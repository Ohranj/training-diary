import React, { useState } from "react";
import { Segment, Button, Modal, Header } from "semantic-ui-react";

import ModalForm from "./ModalForm";
import RenderFormEntry from "./RenderFormEntry";

const NewEntryModalBtn = () => {
    const [open, setOpen] = useState(false);

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
                    <Button color="orange" onClick={() => setOpen(false)}>
                        Submit Entry
                    </Button>
                </Modal.Actions>
                <RenderFormEntry />
            </Modal>
        </Segment>
    );
};
export default NewEntryModalBtn;
