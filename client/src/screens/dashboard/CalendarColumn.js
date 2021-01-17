import React, { useState } from "react";
import RenderCalendar from "./RenderCalendar";
import { Grid, Segment, Header, Statistic } from "semantic-ui-react";

import CalendarRenderExercises from "./CalendarRenderExercises";

const CalendarColumn = () => {
    const [selectedEntry, setSelectedEntry] = useState(undefined);

    return (
        <Grid.Column width={4} className="calendarColumn">
            <Segment basic />
            <RenderCalendar setSelectedEntry={setSelectedEntry} />
            {selectedEntry ? (
                <Segment.Group>
                    <Segment basic textAlign="center" compact>
                        <Header content={selectedEntry.date} color="orange" />
                    </Segment>
                    <Segment basic compact>
                        <Statistic.Group
                            size="mini"
                            inverted
                            color="orange"
                            className="bodyStats"
                        >
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
                        {selectedEntry.exercises.length > 0 ? (
                            <CalendarRenderExercises
                                selectedEntry={selectedEntry}
                            />
                        ) : (
                            <p className="noExercises">No exercises recorded</p>
                        )}
                    </Segment>
                    <Segment
                        basic
                        compact
                        className="entryMemo"
                        content={selectedEntry.memo}
                    />
                </Segment.Group>
            ) : null}
        </Grid.Column>
    );
};

export default CalendarColumn;
