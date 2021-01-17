import React, { useState } from "react";
import { Accordion, Table, Icon } from "semantic-ui-react";

const CalendarRenderExercises = ({ selectedEntry }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (e, index) =>
        activeIndex === index ? setActiveIndex(-1) : setActiveIndex(index);

    return (
        <Accordion className="calendarExerciseAccordion">
            <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={(e, { index }) => handleClick(e, index)}
            >
                <Icon name="dropdown" />
                View Exercises
            </Accordion.Title>
            <Accordion.Content
                active={activeIndex === 0}
                style={{ color: "#ffffff" }}
            >
                <Table
                    celled
                    compact
                    definition
                    textAlign="center"
                    className="renderEntryExercises"
                >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell content={"Sets"} />
                            <Table.HeaderCell content={"Reps"} />
                            <Table.HeaderCell content={"kg / lbs"} />
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {selectedEntry.exercises.map(
                            ({ exercise, sets, reps, weight }, i) => (
                                <Table.Row key={i}>
                                    <Table.Cell content={exercise} />
                                    <Table.Cell content={sets} />
                                    <Table.Cell content={reps} />
                                    <Table.Cell content={weight} />
                                </Table.Row>
                            )
                        )}
                    </Table.Body>
                </Table>
            </Accordion.Content>
        </Accordion>
    );
};

export default CalendarRenderExercises;
