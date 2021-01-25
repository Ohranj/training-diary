import React from "react";
import { Message } from "semantic-ui-react";

const Blurb = () => (
    <Message floating size="small">
        <Message.Header>Manage your workout progress</Message.Header>
        <Message.List>
            <Message.Item
                content="To display graphs you will need to have at least 3 entries
                for that exercise"
            />
            <Message.Item content="New entries can be added above" />
            <Message.Item
                content="Existing entries can be viewed via interaction with the
                calendar"
            />
            <Message.Item
                content="Exercises for entries can be edited after completing the
                steps to interact with the calendar"
            />
            <Message.Item
                content="Adding exercises automatically loads the ability to view the
                graph (see the first item however)"
            />
        </Message.List>
    </Message>
);

export default Blurb;
