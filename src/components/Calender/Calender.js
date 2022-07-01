import React from "react";
import { dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { Link } from "react-router-dom";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Coaching",
    allDay: true,
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2022, 6, 10),
    end: new Date(2022, 6, 15),
  },
  {
    title: "Meeting",
    start: new Date(2022, 6, 18),
    end: new Date(2022, 6, 18),
  },
];

const Calender = () => {
  return (
    <div className="container max-w-[1080px] mx-auto">
      <div className="w-full h-[350px] bg-white rounded-b-[50%] relative">
        <div className="navbar bg-white flex justify-center">
          <div>
            <ul className="menu menu-horizontal pt-8 px-5 gap-3">
              <li className="hover:bg-primary">
                <Link to="/">Todos</Link>
              </li>
              <li className="hover:bg-primary">
                <Link to="/complete-task">Complete Task</Link>
              </li>
              <li className="hover:bg-primary">
                <Link to="/calender">Calender</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-base-200 w-[90%] mx-auto absolute bottom-0 left-[5%] h-56 rounded-lg flex gap-3 items-center justify-center">
          <h1 className="text-3xl font-bold">Calender</h1>
        </div>
      </div>
      <Calendar
        className="mt-96"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
};

export default Calender;
