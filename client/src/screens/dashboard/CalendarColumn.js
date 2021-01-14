import React from "react";
import RenderCalendar from "./RenderCalendar";
import { Grid, Segment, Header } from "semantic-ui-react";

const CalendarColumn = () => (
    <Grid.Column width={4} className="calendarColumn">
        <Segment
            basic
            padded
            textAlign="center"
            style={{ alignItems: "flex-end" }}
        >
            <Header as="h2" size="small"></Header>
        </Segment>
        <RenderCalendar />
    </Grid.Column>
);

export default CalendarColumn;
