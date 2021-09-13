import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { SetAuthedUser } from "./autheduser";
// import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(SetAuthedUser(AUTHED_ID));
    });
  };
}

// export function handleInitialUsers() {
//   return (dispatch) => {
//     return getQuestions().then(({ users }) => {
//       dispatch(receiveUsers(users));
//       dispatch(SetAuthedUser(AUTHED_ID));
//     });
//   };
// }
