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
import { Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";

class QuestionCard extends Component {
  handleAnswer = (qid, answer) => {
    const { dispatch, authedUser } = this.props;

    dispatch(handleSaveQuestionAnswer({ authedUser, qid, answer }));
  };

  render() {
    return (
      <Route
        path={`/questions/question:${this.props.id}`}
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
                <Card.Header>Poll Asked By the user: </Card.Header>

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
                            onClick={() => {
                              this.handleAnswer(this.props.id, "optionOne");

                              this.props.rerenderToResults();
                            }}>
                            {this.props.optionOne.text}
                          </Button>

                          <Button
                            className='btn btn-primary btn-block'
                            variant='secondary'
                            size='md'
                            onClick={() => {
                              this.handleAnswer(this.props.id, "optionTwo");

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

              {/* {console.log(
                "kkkkkkkkkkkkkkkkkk",
                Object.keys(
                  this.props.Users[this.props.authedUser].answers
                ).includes(this.props.id)
              )} */}
            </div>
          );
        }}
      />
    );
  }
}

function mapStateToProps(
  { authedUser, Questions, Users },
  {
    id,

    rerenderToResults,
  }
) {
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

    avatar,
    rerenderToResults,
    Users,
  };
}

export default connect(mapStateToProps)(QuestionCard);
