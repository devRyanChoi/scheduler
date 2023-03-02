import React from "react";

import "components/Appointment/styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";
import Form from "./Form";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE"
const ERROR_DELETE = "ERROR_DELETE"


function Appointment (props) {
  
  const { mode, transition, back } = useVisualMode(
      props.interview ? SHOW : EMPTY
    );

  //SAVE FUNCTION
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(() => (transition(SHOW)))
      .catch(error => transition(ERROR_SAVE, true));
    }
    
    const deleteInterview = () => {
      transition(DELETING, true);
      props.cancelInterview(props.id)
      .then(() => (transition(EMPTY)))
        .catch(error => transition(ERROR_DELETE, true));
  };

  const confirmDelete = () => {
    transition(CONFIRM);
  }

  return (
  <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={back} onSave={save} />
      )}
      {mode === EDIT && (
        <Form
         student={props.interview.student}
         interviewer={props.interview.interviewer["id"]}
         interviewers={props.interviewers}
         onCancel={back}
         onSave={save}
        />
      )}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && <Confirm
        message="Are you sure you want to delete this appointment?"
        onCancel={back}
        onConfirm={deleteInterview} />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === ERROR_SAVE && <Error message="Could not make appointment" onClose={back} />}
      {mode === ERROR_DELETE && <Error message="Could not delete appointment" onClose={back} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={confirmDelete}
          onEdit={() => transition(EDIT)}
        />
        )}

    </article>

  );
};

export default Appointment;