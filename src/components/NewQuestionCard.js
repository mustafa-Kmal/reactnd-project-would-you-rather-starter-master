import React, { Component } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";

class NewQuestionCard extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
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

  handleAddNewQ = () => {
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;

    const questionDispatched = {
      optionOneText,
      optionTwoText,
    };
    dispatch(handleAddQuestion(questionDispatched));

    this.setState(() => ({
      optionOneText: "",
      optionTwoText: "",
    }));
  };
  render() {
    return (
      <Route
        path='/add'
        render={() => {
          return (
            <div className='App'>
              <Card
                bg={"dark"}
                text={"white"}
                border='dark'
                style={{ width: "25rem" }}
                className='mb-2'>
                <Card.Header>New Poll will be added by You </Card.Header>

                <Container>
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
                      // onClick={()=>this.handleAddNewQ()}
                    >
                      <Link
                        className='link'
                        to='/questions/U'
                        onClick={() => this.handleAddNewQ()}>
                        Submit
                      </Link>
                    </Button>
                  </Card.Body>
                </Container>
              </Card>
            </div>
          );
        }}
      />
    );
  }
}

function mapStateToProps({ authedUser }, { toggleTabView, HomeActiveKey }) {
  return {
    authedUser,
    toggleTabView,
    HomeActiveKey,
  };
}

export default connect(mapStateToProps)(NewQuestionCard);
