import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";

import NewEntryExercisesForm from "./NewEntryExercisesForm";
import NewEntryBodyForm from "./NewEntryBodyForm";
import NewEntryMemoForm from "./NewEntryMemoForm";
import NewEntryDate from "./NewEntryDate";

const ModalForm = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (e, index) =>
        activeIndex === index ? setActiveIndex(-1) : setActiveIndex(index);

    return (
        <Accordion>
            <NewEntryDate />
            <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={(e, { index }) => handleClick(e, index)}
            >
                <Icon name="dropdown" />
                Add Exercises?
            </Accordion.Title>
            <Accordion.Content
                active={activeIndex === 0}
                content={<NewEntryExercisesForm />}
            />
            <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={(e, { index }) => handleClick(e, index)}
            >
                <Icon name="dropdown" />
                Add diet and body composition?
            </Accordion.Title>
            <Accordion.Content
                active={activeIndex === 1}
                content={<NewEntryBodyForm />}
            />
            <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={(e, { index }) => handleClick(e, index)}
            >
                <Icon name="dropdown" />
                Add a memo for your diary
            </Accordion.Title>
            <Accordion.Content
                active={activeIndex === 2}
                content={<NewEntryMemoForm />}
            />
        </Accordion>
    );
};

export default ModalForm;
