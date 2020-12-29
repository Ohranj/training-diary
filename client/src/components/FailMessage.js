import React from "react";
import { Message } from "semantic-ui-react";

const FailMessage = () => {
    return (
        <Message compact error size="small">
            Error - Your email and password do not match.
        </Message>
    );
};

export default FailMessage;
