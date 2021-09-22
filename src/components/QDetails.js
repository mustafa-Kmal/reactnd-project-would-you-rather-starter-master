import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import Results from "./Answered/Results";
import QuestionCard from "./UnAnswered/QuestionCard";
import NotFound from "./NotFound";

function QDetails(props) {
  function getIdfromURL() {
    if (window.location.href.includes("question:")) {
      const length = window.location.href.length;
      const index = window.location.href.indexOf("n:");
      const ddid = window.location.href.substring(index + 2, length);
      return ddid;
    }
  }

  function isQAnsed() {
    if (isInDataBase()) {
      const is = Object.keys(props.authed.answers).includes(getIdfromURL())
        ? true
        : false;

      return is;
    }
  }

  function isInDataBase() {
    const isAQuestion = Object.keys(props.Questions).includes(getIdfromURL())
      ? true
      : false;
    return isAQuestion;
  }
  return (
    <div>
      {isInDataBase() ? (
        isQAnsed() === false ? (
          <QuestionCard id={getIdfromURL()} />
        ) : (
          <Results id={getIdfromURL()} />
        )
      ) : (
        <NotFound />
      )}
    </div>
  );
}

function mapStateToProps({ authedUser, Users, Questions }) {
  const authed = Users[authedUser];

  return {
    authed,
    Users,

    authedUser,
    Questions,
  };
}

export default connect(mapStateToProps)(QDetails);

/**
 * 
 http://localhost:3000/questions/question:am8ehyc8byjqgar0jgpub9
 */
