import React, { Component } from "react";

// import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";
import { Link, Route, useParams } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Results from "./Answered/Results";
import QuestionCard from "./UnAnswered/QuestionCard";
import { render } from "@testing-library/react";

class QDetails extends Component {
  state = {
    isAnsed: false,
  };

  rerenderToResults = () => {
    // this.setState(() => ({
    //   isAnsed: true,
    // }));
    // thiss.forceUpdate();
    const ansss = this.state.isAnsed

    this.setState({
        isAnsed: !ansss,
      }) ;

    
  };

  setToQuestionsView = () => {
    this.setState(() => ({
      isAnsed: false,
    }));
  };

  whatCompToShow = () => {
    if (window.location.href.includes("question:")) {
      const length = window.location.href.length;
      const index = window.location.href.indexOf("n:");
      const ddid = window.location.href.substring(index + 2, length);

      return ddid;
    }
  };

  isQAnsed = (id)=>{
    const isAnsed = Object.keys(this.props.authed.answers).includes(id)
    ? true
    : false;

    return isAnsed

  }


  handleAnswer = (qid, answer) => {
      console.log('Icame here ')
    const { dispatch, authedUser } = this.props;

    dispatch(handleSaveQuestionAnswer({ authedUser, qid, answer }));
  };


  render() {
    return (
 

      <div>
        {console.log(
          "jjjjjjjjjjjjjjjjjjjjjjjj",
          this.props.getIdfromURL() , this.props.isQAnsed1()
        //   .includes(this.whatCompToShow())
        )}

        {console.log("..............", this.state.isAnsed)}
        {/* {this.state.isAnsed === false ? ( */}
            {this.isQAnsed(this.whatCompToShow())=== false && this.state.isAnsed === false ? (

          <QuestionCard
            id={this.whatCompToShow()}
            rerenderToResults={this.rerenderToResults}
            handleAnswer={this.handleAnswer}
          />
        ) : (
          <Results id={this.whatCompToShow()} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, Questions, Users }, { id , getIdfromURL , isQAnsed1 }) {
  const authed = Users[authedUser];
//   console.log('mmmmmmmmmmmmmmmmmmmmm',getIdfromURL())

  return {
    authed,
    getIdfromURL,
    isQAnsed1,
    authedUser
  };
}

export default connect(mapStateToProps)(QDetails);
