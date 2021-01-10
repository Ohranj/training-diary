import React from "react";
import { Modal, Button } from "semantic-ui-react";

import register from "../../apis/register";
import SuccessMessage from "../../components/SuccessMessage";
import FailMessage from "../../components/FailMessage";

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
                <FailMessage text="Appears that email already exists" />
            ) : null}
            {userRegistered ? (
                <SuccessMessage text="You can log in now. We're redirecting you" />
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
