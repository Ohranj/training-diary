import React from "react";
import { Modal, Button } from "semantic-ui-react";

import NewEntryExerciseForm from "./NewEntryExerciseForm";

const NewEntryModal = (props) => {
    return (
        <Modal
            closeIcon
            onClose={() => props.setFirstModal(false)}
            onOpen={() => props.setFirstModal(true)}
            open={props.firstModal}
            size="small"
            dimmer="blurring"
            className="modalOne"
            centered={false}
        >
            <Modal.Header content="Exercises" as="h4" />
            <Modal.Content content={<NewEntryExerciseForm />} />
            <Modal.Actions>
                <Button
                    content="Proceed"
                    onClick={() => props.setSecondModal(true)}
                    color="orange"
                />
            </Modal.Actions>
            <Modal
                closeIcon
                onClose={() => props.setSecondModal(false)}
                open={props.secondModal}
                size="tiny"
                dimmer="blurring"
                className="modalTwo"
                centered={false}
            >
                <Modal.Header content="Body Composition" as="h4" />
                <Modal.Content></Modal.Content>
                <Modal.Actions>
                    <Button
                        color="orange"
                        content="Submit entry"
                        onClick={() => {
                            props.setFirstModal(false);
                            props.setSecondModal(false);
                        }}
                    />
                </Modal.Actions>
            </Modal>
        </Modal>
    );
};

export default NewEntryModal;
