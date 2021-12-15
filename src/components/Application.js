import React from "react";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from 'components/Appointment';
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

export default function Application() {
  //Uses application data (custom hook) that executes main application functions
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  //Helper functions to extract data from api server to be properly displayed
  const appointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments.map((appointment) => {
          const interview = getInterview(state, appointment.interview);
          return (
            <Appointment key={appointment.id}
              {...appointment}
              interview={interview}
              interviewers={interviewers}
              bookInterview={bookInterview}
              cancelInterview={cancelInterview} />
          );
        })};
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
};
