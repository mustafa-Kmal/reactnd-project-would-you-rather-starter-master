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
import Results from "./Results";
// import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

class AnsweredQTile extends Component {
  render() {
    return (
      // <Link to={`/question/${this.props.id}`} className='link'>
      <div className='App'>
        <Card
          size='sm'
          bg={"dark"}
          // key={idx}
          text={"white"}
          border='dark'
          style={{ width: "25rem" }}
          className='mb-2'>
          <Card.Header>{this.props.author} asks: </Card.Header>

          <Container>
            <Row>
              <Col xs={3}>
                <Figure>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt='171x180'
                    src='holder.js/171x180'
                  />
                  {this.props.avatar}
                </Figure>
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title> Would you rather... </Card.Title>
                  <Card.Text>{this.props.optionOne.text}</Card.Text>

                  <Button variant='secondary' size='md'>
                    View Poll
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Container>
        </Card>
        {/* <Results id={this.props.Id} /> */}
      </div>
      // </Link>
    );
  }
}

function mapStateToProps({ authedUser, Questions }, { id, avatar }) {
  const question = Questions[id];
  return {
    authedUser,
    optionOne: question.optionOne,

    author: question.author,
    avatar: avatar,
    Id: id,

    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
  };
}

export default connect(mapStateToProps)(AnsweredQTile);
