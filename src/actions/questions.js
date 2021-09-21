import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import {addUserAnswer} from './users'

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

// function AddQuestion({ id, timestamp , author, optionOneText, optionTwoText }) {
//   return {
//     type: ADD_QUESTION,
//     id,
//     timestamp,
    
//     optionOneText,
//     optionTwoText,
//     author 
//     };
// }

function AddQuestion(question ) {
  return {
    type: ADD_QUESTION,
    question
    };
}


export function handleAddQuestion({ optionOneText, optionTwoText }) {
  return (dispatch , getState) => {
    const {authedUser} = getState()

    const Q = {
      optionOneText,
      optionTwoText,
      author : authedUser
    }
    

    return saveQuestion(Q).then((question) =>
      dispatch(AddQuestion(question))
    ).catch((e) => {
      console.warn("Error in handling saving the new question ", e);
      
      alert("The was an error. Try again.");
    });;
  };
}

 function SaveQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    qid,
    authedUser,
    answer,
  };
}

export function handleSaveQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(SaveQuestionAnswer(info));
    return saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in handling saving the answer ", e);
      dispatch(SaveQuestionAnswer(info));
      alert("The was an error liking the tweet. Try again.");
    });
  };
}

// export function handleSaveQuestionAnswer(optionOneText, optionTwoText, author) {
//   return dispatch => {
//     return saveQuestion({ optionOneText, optionTwoText, author }).then(
//       question => {
//         dispatch(SaveQuestionAnswer(question));
//         // dispatch(addQuestionToUser(question));
//       }
//     );
//   };
// }