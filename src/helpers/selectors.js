export function getAppointmentsForDay(state, day) {
  const result = [];

  const dayObj = state.days.find(selectedDay => selectedDay.name === day);

  if (!dayObj) {
      return [];
  }
  for (let id of dayObj.appointments) {
      result.push(state.appointments[id])
  }
  return result;

}

export function getInterview (state, interview) {
// console.log("Props: ", state, interview)
const interviewObj = {}

if (!interview) {
  return null;
}

interviewObj["student"] = interview.student;
interviewObj["interviewer"] = state.interviewers[interview.interviewer];

return interviewObj;
}
export function getInterviewersForDay(state, day) {
const findDay = state.days.find(stateDay => stateDay.name === day);

let result = [];

if (!state.days.length) {
  return result;
}

if (findDay === undefined) {
  return result;
}

for (const id of findDay.interviewers) {

  result.push(state.interviewers[id]);
}
return result;
}