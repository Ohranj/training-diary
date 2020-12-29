import React, { useState } from "react";
import { Modal, Header } from "semantic-ui-react";
import { connect } from "react-redux";

import RegisterForm from "./RegisterForm";
import ModalActions from "./ModalActions";

const Register = ({ registerDetails }) => {
    const [openModal, setOpenModal] = useState(false);
    const [userRegistered, setUserRegistered] = useState(false);
    const [registrationFailed, setRegistrationFailed] = useState(false);

    const resetModal = (toggle) => {
        setOpenModal(toggle);
        setUserRegistered(false);
        setRegistrationFailed(false);
    };

    return (
        <Modal
            size="small"
            closeIcon
            centered={false}
            onClose={() => resetModal(false)}
            onOpen={() => resetModal(true)}
            open={openModal}
            trigger={
                <Header
                    as="h4"
                    className="openRegisterModal"
                    color="orange"
                    content=" Don't have an account? Sign up here"
                />
            }
            dimmer="blurring"
        >
            <Modal.Header content="Register an account" />
            <Modal.Content>
                <Modal.Description>
                    <RegisterForm userRegistered={userRegistered} />
                </Modal.Description>
            </Modal.Content>
            <ModalActions
                setUserRegistered={setUserRegistered}
                setOpenModal={setOpenModal}
                registerDetails={registerDetails}
                setRegistrationFailed={setRegistrationFailed}
                userRegistered={userRegistered}
                registrationFailed={registrationFailed}
            />
        </Modal>
    );
};

const mapStateToProps = (state) => ({
    registerDetails: state.register,
});

export default connect(mapStateToProps)(Register);
