import React, { Component } from "react";

// import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { Link, Route, useParams } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Results from "./Answered/Results";
import QuestionCard from "./UnAnswered/QuestionCard";
import NotFound from "./NotFound";


class QDetails extends Component {
  componentDidMount() {
    this.setState(() => ({
      isAnsed: this.isQAnsed(),
    }));
  }
  state = {
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

    {!this.isInDataBase()&&
    <NotFound/ >
    
    }
    return (
      <Route path='/questions/question:'>
        <div>
          {this.state.isAnsed === false ? (
            <QuestionCard
              id={this.getIdfromURL()}
              rerenderToResults={this.rerenderToResults}
            />
          ) : (
            <Results id={this.getIdfromURL()} />
          )}
        </div>
      </Route>
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
