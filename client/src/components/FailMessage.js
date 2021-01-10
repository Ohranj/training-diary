import React from "react";
import { Message } from "semantic-ui-react";

const FailMessage = ({ text }) => (
    <Message compact error size="small">
        {text}
    </Message>
);

export default FailMessage;
