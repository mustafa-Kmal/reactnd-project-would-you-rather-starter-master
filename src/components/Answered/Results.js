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
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import { connect } from "react-redux";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

class Results extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <br />

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
                    <ListGroup>
                      <ListGroup.Item size='lg' action variant='dark'>
                        {this.props.optionOne.text}
                        <ProgressBar
                          variant='light'
                          now={
                            this.props.optionOne.length / this.props.pollSize
                          }
                          label={`Option2 20%`}
                          key={1}
                        />
                        {/* {console.log(this.props.optionOne.votes.length)} */}
                        {this.props.optionOne.votes.length} out of{" "}
                        {this.props.pollSize} votes
                      </ListGroup.Item>
                      <ListGroup.Item size='lg' action variant='dark' active>
                        {this.props.optionTwo.text}
                        <ProgressBar
                          variant='secondary'
                          now={
                            this.props.optionTwo.votes.length / this.props.pollSize
                          }
                          label={`Option1 80%`}
                          key={2}
                        />
                        {this.props.optionTwo.votes.length} out of{" "}
                        {this.props.pollSize} votes
                      </ListGroup.Item>
                    </ListGroup>

                  </Card.Body>
                </Col>
              </Row>
            </Container>
          </Card>
        </header>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, Questions }, { id }) {
  const question = Questions[id];
  return {
    authedUser,
    optionOne: question.optionOne,
    optionTwo: question.optionTwo,

    author: question.author,
    pollSize: question.optionOne.votes.length + question.optionTwo.votes.length,
    Id: id,

    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
  };
}

export default connect(mapStateToProps)(Results);
