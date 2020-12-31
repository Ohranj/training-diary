import React, { useState } from "react";
import { Segment, Button } from "semantic-ui-react";

import NewEntryModal from "./NewEntryModal";

const NewEntryBtn = () => {
    const [firstModal, setFirstModal] = useState(false);
    const [secondModal, setSecondModal] = useState(false);

    return (
        <Segment basic padded>
            <Button color="orange" onClick={() => setFirstModal(true)}>
                New entry
            </Button>
            <NewEntryModal
                firstModal={firstModal}
                secondModal={secondModal}
                setFirstModal={setFirstModal}
                setSecondModal={setSecondModal}
            />
        </Segment>
    );
};

export default NewEntryBtn;
