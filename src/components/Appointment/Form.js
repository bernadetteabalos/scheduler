import React, { useState } from 'react';
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  //Initial state setup here for student, interviewer and errors 
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  //Reset function to be used in "cancel" upon clicking the cancel button
  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  //Cancel function to be passed into onClick prop in the button component
  //Will reset form inputs using reset function
  const cancel = () => {
    reset();
    props.onCancel();
  };

  //Validates if there was a student name inputted or interviewer selected 
  //If either are not true then we display an error message and prevent submission
  const validate = () => {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    } else if (interviewer === null) {
      setError("Please select an interviewer")
    } else {
      setError("");
      props.onSave(student, interviewer);
    }
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            value={student}
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={() => cancel(student)}>Cancel</Button>
          <Button confirm onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  );
};