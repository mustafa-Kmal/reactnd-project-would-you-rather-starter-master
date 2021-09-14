import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { SetAuthedUser } from "./autheduser";
// import { showLoading, hideLoading } from 'react-redux-loading'

// const AUTHED_ID = "sarahedo";

export function handleInitialUsers( ) {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      
      dispatch(receiveUsers(users));
      
    });
  };
}

export function handleInitialDataUser( UserID) {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(SetAuthedUser(UserID));
    });
  };
}



