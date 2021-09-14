import React, { Component } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";
import FigureImage from "react-bootstrap/FigureImage";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";
import { Route , Link , Redirect} from "react-router-dom";




class NewQuestionCard extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    toHome: false,
  };
  handleChangeOptionOne = (e) => {
    const text = e.target.value;

    this.setState(() => ({
      optionOneText: text,
    }));
  };

  handleChangeOptionTwo = (e) => {
    const text = e.target.value;

    this.setState(() => ({
      optionTwoText: text,
    }));
  };

  handleAddNewQ = (e) => {
    e.preventDefault();
    // const {authedUser} = this.props

    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, authedUser } = this.props;

    const questionDispatched = {
      optionOneText,
      optionTwoText,
    };
    dispatch(handleAddQuestion(questionDispatched));

    this.setState(() => ({
      optionOneText: "",
      optionTwoText: "",
      toHome:  true,
    }));
  };
  render() {
   
    return (
      <Route
        path='/Dashboard/NewQuestionCard'
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
                <Card.Header>New Poll will be added by You </Card.Header>

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
                        <Col>
                            <Form.Control
                              size='sm'
                              type='text'
                              placeholder='Option 1 goes here'
                              onChange={this.handleChangeOptionOne}
                              value={this.state.optionOne}
                            />
                          </Col>
                          ــــــــــــــــ OR ــــــــــــــــ
                          <br />
                          <Col>
                            <Form.Control
                              size='sm'
                              type='text'
                              placeholder='Option 2 goes here'
                              onChange={this.handleChangeOptionTwo}
                              value={this.state.optionTwo}
                            />
                          </Col>

                        <Button
                          variant='secondary'
                          size='md'
                          disabled={
                            this.state.optionOne === "" ||
                            this.state.optionTwo === ""
                          }
                          onClick={this.handleAddNewQ}>
                          <Link
                            className='link'
                            to='/Dashboard/Home/Unanswered'>
                            Submit
                          </Link>
                        </Button>
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

function mapStateToProps({ authedUser }) {
  return {
    // QuestionsIds: Object.keys(Questions),
    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestionCard);
