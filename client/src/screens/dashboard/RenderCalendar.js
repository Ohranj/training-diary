import React from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const RenderCalendar = () => (
    <Calendar onClickDay={(date) => console.log(date)} />
);

export default RenderCalendar;
