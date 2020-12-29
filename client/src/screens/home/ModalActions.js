import React from "react";
import { Message, Icon, Modal, Button } from "semantic-ui-react";

import register from "../../apis/register";

const ModalActions = ({
    setUserRegistered,
    setOpenModal,
    registerDetails,
    setRegistrationFailed,
    userRegistered,
    registrationFailed,
}) => {
    const handleRegister = () =>
        register(registerDetails)
            .then(() => setRegistrationFailed(false))
            .then(() => setUserRegistered(true))
            .then(() =>
                setTimeout(() => {
                    setOpenModal(false);
                }, 3000)
            )
            .catch(() => setRegistrationFailed(true));

    const handleValidForm = ({ password, email }) =>
        password.length >= 7 && /\d/g.test(password) && /[@]/g.test(email)
            ? false
            : true;

    return (
        <Modal.Actions>
            {registrationFailed ? (
                <Message error>
                    <Message.Content>
                        <Message.Header>Error</Message.Header>
                        Appears that username already exists?
                    </Message.Content>
                </Message>
            ) : null}
            {userRegistered ? (
                <Message success icon>
                    <Icon name="circle notched" loading />
                    <Message.Content>
                        <Message.Header>Success</Message.Header>
                        You can log in now. We're redirecting you
                    </Message.Content>
                </Message>
            ) : (
                <Button
                    color="orange"
                    content="Register"
                    disabled={handleValidForm(registerDetails)}
                    onClick={() => handleRegister()}
                />
            )}
        </Modal.Actions>
    );
};

export default ModalActions;
