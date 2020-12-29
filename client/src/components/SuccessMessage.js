import React from "react";
import { Message, Icon } from "semantic-ui-react";

const SuccessMessage = () => {
    return (
        <Message compact success size="small">
            <Icon name="circle notched" loading></Icon>
            Success - We're logging you in.
        </Message>
    );
};

export default SuccessMessage;
