import React from "react";
import { Message, Icon } from "semantic-ui-react";

const SuccessMessage = ({ text }) => {
    return (
        <Message compact success size="small">
            <Icon name="circle notched" loading></Icon>
            {text}
        </Message>
    );
};

export default SuccessMessage;
