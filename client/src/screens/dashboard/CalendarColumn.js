import React, { useState } from "react";
import RenderCalendar from "./RenderCalendar";
import {
    Grid,
    Segment,
    Header,
    Statistic,
    Accordion,
    Icon,
} from "semantic-ui-react";

const CalendarColumn = () => {
    const [selectedEntry, setSelectedEntry] = useState(undefined);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (e, index) =>
        activeIndex === index ? setActiveIndex(-1) : setActiveIndex(index);

    return (
        <Grid.Column width={4} className="calendarColumn">
            <Segment basic padded />
            <RenderCalendar setSelectedEntry={setSelectedEntry} />
            {selectedEntry ? (
                <Segment.Group>
                    <Segment basic textAlign="center" compact>
                        <Header content={selectedEntry.date} color="orange" />
                    </Segment>
                    <Segment basic compact>
                        <Statistic.Group size="mini" inverted>
                            <Statistic
                                value={selectedEntry.bodyweight}
                                label="Bodyweight"
                            />
                            <Statistic
                                value={selectedEntry.bodyfat}
                                label="Bodyfat"
                            />
                            <Statistic
                                value={selectedEntry.calories}
                                label="Calories"
                            />
                        </Statistic.Group>
                    </Segment>
                    <Segment basic compact>
                        <Accordion>
                            {selectedEntry.exercises.map((exercise, i) => (
                                <div>
                                    <Accordion.Title
                                        active={activeIndex === i}
                                        index={0}
                                        onClick={(e, { index }) =>
                                            handleClick(e, index)
                                        }
                                    >
                                        <Icon name="dropdown" />
                                        Exercise {i + 1}
                                    </Accordion.Title>
                                    <Accordion.Content
                                        active={activeIndex === i}
                                    >
                                        <p style={{ color: "#ffffff" }}>
                                            {exercise.exercise}:-
                                            {exercise.sets} sets of
                                            {exercise.reps} reps @
                                            {exercise.weight} (kg/lbs)
                                        </p>
                                    </Accordion.Content>
                                </div>
                            ))}
                        </Accordion>
                    </Segment>
                    <Segment basic compact content={selectedEntry.memo} />
                </Segment.Group>
            ) : null}
        </Grid.Column>
    );
};

export default CalendarColumn;
