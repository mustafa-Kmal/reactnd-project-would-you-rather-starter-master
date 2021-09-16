// import React, { Component } from "react";

// // import "../App.css";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import { Card } from "react-bootstrap";
// import Figure from "react-bootstrap/Figure";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { connect } from "react-redux";
// import { handleSaveQuestionAnswer } from "../../actions/questions";
// import { Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import PrivateRoute from "../PrivateRoute";
// import Results from "./Answered/Results";
// import QuestionCard from "./UnAnswered/QuestionCard";

// class QDetails extends Component {
//   handleAnswer = (qid, answer) => {
//     const { dispatch, authedUser } = this.props;

//     dispatch(handleSaveQuestionAnswer({ authedUser, qid, answer }));
//   };

//   render() {
//     return (
//       <Route
//         path={`/question:${this.props.id}`}
//         render={() => {
//           return this.props.ansed ? (
//             <Results id={this.props.id} />
//           ) : (
//             <QuestionCard id={this.props.id} />
//           );
//         }}
//       />
//     );
//   }
// }

// function mapStateToProps({ authedUser, Questions }, { id }) {
//   const Question = Questions[id];
//   const ansed =
//     Question.optionOne.votes.includes(authedUser) ||
//     Question.optionTwo.votes.includes(authedUser)
//       ? true
//       : false;

//   return {
//     authedUser,
//     optionOne: Question.optionOne,
//     optionTwo: Question.optionTwo,
//     question: Question,
//     author: Question.author,
//     pollSize: Question.optionOne.votes.length + Question.optionTwo.votes.length,
//     id,

//     ansed,

//     // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
//   };
// }

// export default connect(mapStateToProps)(QDetails);
