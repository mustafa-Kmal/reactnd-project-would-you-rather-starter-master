export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'


export function receiveUsers (users){
    return {
        type: RECEIVE_USERS,
        users
    }

}

export function addUserQuestion({ authedUser, qid, answer }){
    return {
        type: ADD_USER_QUESTION,
        qid,
        authedUser,
        answer,
      };

}


export function addUserAnswer(question){
    return {
        type: ADD_USER_ANSWER,
        question
      };

}