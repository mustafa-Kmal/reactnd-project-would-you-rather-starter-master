import React, { Component } from "react";
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
import PrivateRoute from "../PrivateRoute";


class QuestionCard extends Component {
  // disableAnsButtons =()=>{
  //   Object.keys(this.props.authedUser.answers).includes(this.props.id) ? true : false 
  // }

  handleAnswer = (qid, answer) => {
    const { dispatch, authedUser } = this.props;

    dispatch(handleSaveQuestionAnswer({ authedUser, qid, answer }));
  };

  render() {
    // console.log(this.props.id)

    return (
      <Route
        path={`/questions/question:${this.props.id}`}
        // path={`/`}

        render={() => {
          return (
            <div className='App'>
                           {console.log( 'kkkkkkkkkkkkkkkkkk',  Object.keys(this.props.Users[this.props.authedUser].answers).includes(this.props.id)
                           ) }
              

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
                          alt='17x18'
                          src={this.props.avatar}
                        />
                      </Figure>
                    </Col>
                    <Col>
                      {" "}
                      <Card.Body>
                        <Card.Title> Would you rather... </Card.Title>
                        <div className='btn-group'>
                          <Button
                            className='btn btn-primary btn-block'
                            variant='secondary'
                            size='md'
                            disabled = {Object.keys(this.props.Users[this.props.authedUser].answers).includes(this.props.id)}
                            onClick={() => {
                              this.handleAnswer(this.props.id, "optionOne");
                              // this.props.handleAnswer(this.props.id, "optionOne");

                             this.props.rerenderToResults();

                            }}>
                            {this.props.optionOne.text}
                          </Button>

                          <Button
                            className='btn btn-primary btn-block'
                            variant='secondary'
                            size='md'
                            disabled = {Object.keys(this.props.Users[this.props.authedUser].answers).includes(this.props.id)}
                            onClick={() => {
                              this.handleAnswer(this.props.id, "optionTwo");
                              // this.props.handleAnswer(this.props.id, "optionTwo");

                             this.props.rerenderToResults();

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
  { authedUser, Questions , Users},
  { id, 
    toggleView, 
    PassResultsId, 
    changeToResultsView ,
    handleAnswer,
    rerenderToResults}
) {

  console.log(',,,,,,,,,,,,,,,,,,,,,,,,' , id)
  const Question = Questions[id];
  const avatar = Users[Question.author].avatarURL;


  return {
    authedUser,
    optionOne: Question.optionOne,
    optionTwo: Question.optionTwo,
    question: Question,
    author: Question.author,
    pollSize: Question.optionOne.votes.length + Question.optionTwo.votes.length,
    id,
    toggleView,
    // toggleResultsView,
    PassResultsId,
    changeToResultsView,
    avatar,
    rerenderToResults,
    Users,handleAnswer

    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
  };
}

export default connect(mapStateToProps)(QuestionCard);
