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
import { handleSaveQuestionAnswer } from "../../actions/questions";
import {  Route } from "react-router-dom";
import { Link } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";


class QuestionCard extends Component {
  handleAnswer = (qid, answer) => {
    const { dispatch, authedUser } = this.props;

    dispatch(handleSaveQuestionAnswer({ authedUser, qid, answer }));
  };

  render() {
    // console.log(this.props.id)

    return (
      <Route
        path={`/question:${this.props.id}`}
        // path={`/`}

        render={() => {
          return (
            <div className='App'>
              <Card
                bg={"dark"}
                // key={idx}
                text={"white"}
                border='dark'
                style={{ width: "25rem" }}
                className='mb-2'>
                <Card.Header>
                 
                  Poll Asked By the user:{" "}
                </Card.Header>

                <Container>
                  <Row>
                    <Col xs={3}>
                      {" "}
                      <Figure>
                        <Figure.Image
                          width={171}
                          height={180}
                          alt='171x180'
                          src='holder.js/171x180'
                        />
                      </Figure>
                    </Col>
                    <Col>
                      {" "}
                      <Card.Body>
                        <Card.Title> Would you rather... </Card.Title>
                        <div class='btn-group'>
                          <Button
                            class='btn btn-primary btn-block'
                            variant='secondary'
                            size='md'
                            onClick={() => {
                              this.handleAnswer(this.props.id, "optionOne");
                              this.props.changeToResultsView();
                              this.props.PassResultsId(this.props.id)

                            }}>
                            {this.props.optionOne.text}
                          </Button>

                          <Button
                            class='btn btn-primary btn-block'
                            variant='secondary'
                            size='md'
                            onClick={() => {
                              this.handleAnswer(this.props.id, "optionTwo");
                              this.props.changeToResultsView();
                              this.props.PassResultsId(this.props.id)
                            }}>
                            {this.props.optionTwo.text}
                          </Button>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </div>
          );
        }}
      />
    );
  }
}

function mapStateToProps(
  { authedUser, Questions },
  { id, toggleView, toggleResultsView, PassResultsId, changeToResultsView }
) {
  const Question = Questions[id];

  return {
    authedUser,
    optionOne: Question.optionOne,
    optionTwo: Question.optionTwo,
    question: Question,
    author: Question.author,
    pollSize: Question.optionOne.votes.length + Question.optionTwo.votes.length,
    id,
    toggleView,
    toggleResultsView,
    PassResultsId,
    changeToResultsView,

    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
  };
}

export default connect(mapStateToProps)(QuestionCard);
