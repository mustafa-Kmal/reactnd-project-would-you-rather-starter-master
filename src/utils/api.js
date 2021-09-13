import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
  // formatQuestion,
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}

export function saveQuestion(info) {
  return _saveQuestion(info);
}

export function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}