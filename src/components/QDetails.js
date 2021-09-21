import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import Results from "./Answered/Results";
import QuestionCard from "./UnAnswered/QuestionCard";
import NotFound from "./NotFound";

class QDetails extends Component {
  componentDidMount() {
    console.log("received id is", this.props);
    this.setState(() => ({
      isAnsed: this.isQAnsed(),
    }));
  }
  state = {
    id: "",
    isAnsed: false,
  };

  rerenderToResults = () => {
    const ansss = this.state.isAnsed;
    ansss === false &&
      this.setState({
        isAnsed: !ansss,
      });
  };

  setToQuestionsView = () => {
    this.setState(() => ({
      isAnsed: false,
    }));
  };

  getIdfromURL = () => {
    if (window.location.href.includes("question:")) {
      const length = window.location.href.length;
      const index = window.location.href.indexOf("n:");
      const ddid = window.location.href.substring(index + 2, length);
      return ddid;
    }
  };

  isQAnsed = (id) => {
    const is = Object.keys(this.props.authed.answers).includes(
      this.getIdfromURL()
    )
      ? true
      : false;

    is === true && this.rerenderToResults();

    return is;
  };

  isInDataBase = () => {
    const isAQuestion = Object.keys(this.props.Questions).includes(
      this.getIdfromURL()
    )
      ? true
      : false;
    return isAQuestion;
  };

  render() {
    return (
      <div>
        {this.isInDataBase() ? (
          this.isQAnsed === false ? (
            <QuestionCard
              id={this.getIdfromURL()}
              rerenderToResults={this.rerenderToResults}
            />
          ) : (
            <Results id={this.getIdfromURL()} />
          )
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, Users, Questions }) {
  const authed = Users[authedUser];

  return {
    authed,

    authedUser,
    Questions,
  };
}

export default connect(mapStateToProps)(QDetails);

/**
 * 
 http://localhost:3000/questions/question:am8ehyc8byjqgar0jgpub9
 */
