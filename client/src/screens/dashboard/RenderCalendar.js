import React from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";

import "react-calendar/dist/Calendar.css";
import "../../assets/css/calendar.css";

const formatDate = (date, cb) => cb(new Date(date).toLocaleDateString("en-GB"));

const RenderCalendar = ({ allEntries }) => {
    const renderActiveTiles = (tile) =>
        allEntries.entries.find((entry) => entry.date === tile);

    return (
        <Calendar
            onClickDay={(date) => formatDate(date, (val) => console.log(val))}
            tileClassName={({ date }) =>
                formatDate(date, (val) =>
                    renderActiveTiles(val) ? "activeTile" : "inactiveTile"
                )
            }
            prev2Label={<Icon name="backward" />}
            prevLabel={<Icon name="chevron circle left" />}
            next2Label={<Icon name="forward" />}
            nextLabel={<Icon name="chevron circle right" />}
        />
    );
};

const mapStateToProps = (state) => ({
    allEntries: state.allEntries,
});

export default connect(mapStateToProps)(RenderCalendar);
