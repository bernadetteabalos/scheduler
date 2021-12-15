
export function getAppointmentsForDay(state, day) {
  //Returns an array of appointments for that day
  const days = state.days;
  const appointments = state.appointments;
  const result = [];

  //Iterates through days and returns appointments scheduled for that day
  for (let dayOfWeek of days) {
    if (dayOfWeek.name === day) {
      for (let app of dayOfWeek.appointments) {
        result.push(appointments[app])
      }
    }
  }
  return result;
};

//Grabs interview information
export function getInterview(state, interview) {
  const interviewers = state.interviewers;
  const result = {}
  if (!interview) {
    return null;
  }
  result.student = interview.student;
  result.interviewer = interviewers[interview.interviewer];

  return result;
};

//Grabs the interviewers scheduled for that day to be displayed
export function getInterviewersForDay(state, day) {
  const days = state.days;
  const interviewers = state.interviewers;
  const result = [];

  for (let dayOfWeek of days) {
    if (dayOfWeek.name === day) {
      for (let interviewersDay of dayOfWeek.interviewers) {
        result.push(interviewers[interviewersDay]);
      }
    }
  }
  return result;
};