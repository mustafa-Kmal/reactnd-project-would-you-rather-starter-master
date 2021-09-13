import React, { Component } from "react";

// import logo from "../logo.svg";
// import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";
import FigureImage from "react-bootstrap/FigureImage";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";
// import { Component } from "react";

class QuestionCard extends Component {
  handleAnswer = (qid, answer) => {
    const { dispatch, question, authedUser } = this.props;

    dispatch(handleSaveQuestionAnswer({ authedUser, qid, answer }));
  };

  render() {
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
                      onClick={() =>
                        this.handleAnswer(
                          this.props.id,
                          'optionOne'
                        )
                      }>
                      {this.props.optionOne.text}
                    </Button>

                    <Button
                      class='btn btn-primary btn-block'
                      variant='secondary'
                      size='md'
                      onClick={() =>
                        this.handleAnswer(
                          this.props.id,
                          'optionTwo'
                        )
                      }>
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
  }
}

function mapStateToProps({ authedUser, Questions }, { id }) {
  // console.log(  authedUser);
  const Question = Questions[id];
  return {
    authedUser,
    optionOne: Question.optionOne,
    optionTwo: Question.optionTwo,
    question: Question,
    author: Question.author,
    pollSize: Question.optionOne.votes.length + Question.optionTwo.votes.length,
    id: id,

    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
  };
}

export default connect(mapStateToProps)(QuestionCard);
