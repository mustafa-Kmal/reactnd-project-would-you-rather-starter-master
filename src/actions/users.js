// import {  saveQuestionAnswer } from "../utils/api";

// import {SaveQuestionAnswer} from './questions'




export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addUserQuestion({ id, author }) {
  return {
    type: ADD_USER_QUESTION,
    id,
    author,
  };
}

export function addUserAnswer({authedUser, qid, answer}) {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer,
  };
}


// export function handleSaveQuestionAnswer(authedUser, qid, answer) {
//   return (dispatch) => {
//     dispatch(addUserAnswer(authedUser, qid, answer));
//     dispatch(addAnswerToQuestion(authedUser, qid, answer));

//     return saveQuestionAnswer(authedUser, qid, answer).catch((e) => {
//       console.warn("Error in handleSaveQuestionAnswer:", e);
//     });
//   };
// }



// export function handleSaveQuestionAnswer(authedUser, qid, answer) {
//     return (dispatch) => {
//       dispatch(SaveQuestionAnswer(authedUser, qid, answer));
//       dispatch(addUserAnswer(authedUser, qid, answer))
//       return saveQuestionAnswer(info).catch((e) => {
//         console.warn("Error in handling saving the answer ", e);
//         dispatch(SaveQuestionAnswer(info));
//         alert("The was an error liking the tweet. Try again.");
//       });
//     };
//   }
  
  