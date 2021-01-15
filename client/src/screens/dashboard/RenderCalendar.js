import React from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";

import "react-calendar/dist/Calendar.css";
import "../../assets/css/calendar.css";

const RenderCalendar = ({ allEntries, setSelectedEntry }) => {
    const formatDate = (date, cb) =>
        cb(new Date(date).toLocaleDateString("en-GB"));

    const renderActiveTiles = (tile) =>
        allEntries.entries.find((entry) => entry.date === tile);

    return (
        <Calendar
            onClickDay={(date) =>
                formatDate(date, (val) => {
                    const selectedEntry = allEntries.entries.find(
                        (entry) => entry.date === val
                    );
                    setSelectedEntry(selectedEntry);
                })
            }
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
