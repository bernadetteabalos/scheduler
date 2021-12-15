import { useState, useEffect } from 'react';
import axios from "axios";

//Main functionalities for application here
export default function useApplicationData() {
  //Set initial state
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const setDay = day => setState({ ...state, day });

  //Function to find the and return the slots with no interviews
  //Used to update the remaining spots
  const getFreeSpots = (dayObj, appointments) => {
    let apptIdList = dayObj.appointments;
    const nullInterviews = apptIdList.filter((apptId) => {
      return !appointments[apptId].interview;
    });
    const spots = nullInterviews.length;
    return spots;
  };

  //Book an interview
  function bookInterview(id, interview) {
    //Setting current states
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = [...state.days];
    let targetDayObj = {};
    for (const dayObj of days) {
      if (dayObj.name === state.day) {
        targetDayObj = dayObj;
      }
    }

    //Use getFreeSpots to update the number of spots after successfully booking interview
    const spots = getFreeSpots(targetDayObj, appointments);
    const targetId = targetDayObj.id;
    const indexTargetDayObj = days.findIndex(
      (element) => element.id === targetId
    );
    days[indexTargetDayObj].spots = spots;

    //Axios put request to save interview into database so it doesn't reset when we refresh
    return axios.put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then(() => {
        setState({ ...state, appointments, days });
      });
  };

  //Deletes an interview
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = [...state.days];
    let targetDayObj = {};
    for (const dayObj of days) {
      if (dayObj.name === state.day) {
        targetDayObj = dayObj;
      }
    }

    //Use getFreeSpots to update the number of spots after successfully deleting an interview
    const spots = getFreeSpots(targetDayObj, appointments);
    const targetId = targetDayObj.id;
    const indexTargetDayObj = days.findIndex(
      (element) => element.id === targetId
    );
    days[indexTargetDayObj].spots = spots;

    //Delete request to remove appointment from database
    return axios.delete(`http://localhost:8001/api/appointments/${id}`)
      .then(() => {
        setState({ ...state, appointments, days });
      });
  };

  //Axios get requests to grab database info from api server
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);

  //So that we can give it to Application.js to use
  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
};