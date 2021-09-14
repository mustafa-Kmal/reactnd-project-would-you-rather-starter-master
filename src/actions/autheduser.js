export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function SetAuthedUser (id){
    return {
        type: SET_AUTHED_USER,
        id
    }

}

// export function handleSaveAuthedUser(info) {
//     return (dispatch) => {
//       dispatch(SaveQuestionAnswer(info));
//       return saveQuestionAnswer(info).catch((e) => {
//         console.warn("Error in handling saving the answer ", e);
//         dispatch(SaveQuestionAnswer(info));
//         alert("The was an error liking the tweet. Try again.");
//       });
//     };
//   }