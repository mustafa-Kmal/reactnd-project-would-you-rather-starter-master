import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";

class Results extends Component {
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
                <Card.Header>
                  Poll Asked By the user:{`  ${this.props.author}`}
                </Card.Header>

                <Container>
                  <Row>
                    <Col xs={3}>
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
                      <Card.Body>
                        <Card.Title> Would you rather... </Card.Title>
                        <ListGroup>
                          <ListGroup.Item
                            size='sm'
                            action
                            variant='dark'
                            disabled>
                            <p
                              className={
                                this.props.choosenOp === 1 ? "ans" : ""
                              }>
                              {this.props.optionOne.text}
                            </p>
                            <ProgressBar
                              variant='dark'
                              now={this.props.optionOnePercentage}
                             
                              label={`Option 1 ${
                                (this.props.optionOne.votes.length /
                                  this.props.pollSize) *
                                100
                              }%`}
                              key={1}
                            />
                            {this.props.optionOne.votes.length} out of
                            {this.props.pollSize} votes
                          </ListGroup.Item>
                          <ListGroup.Item
                            size='sm'
                            action
                            variant='dark'
                            disabled>
                            <p
                              className={
                                this.props.choosenOp === 2 ? "ans" : ""
                              }>
                              {this.props.optionTwo.text}
                            </p>
                            <ProgressBar
                              variant='dark'
                              now={this.props.optionTwoPercentage}

                              label={`Option 2 ${
                                (this.props.optionTwo.votes.length /
                                  this.props.pollSize) *
                                100
                              }%`}
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
            </div>
          );
        }}
      />
    );
  }
}

function mapStateToProps({ authedUser, Questions, Users }, { id, toggleView }) {
  const question = Questions[id];
  const choosenOp = question.optionOne.votes.includes(authedUser) ? 1 : 2;
  const avatar = Users[question.author].avatarURL;
  const optionOnePercentage = ((question.optionOne.votes.length )/(question.optionOne.votes.length + question.optionTwo.votes.length))*100
  const optionTwoPercentage = ((question.optionTwo.votes.length )/(question.optionOne.votes.length + question.optionTwo.votes.length))*100

  return {
    authedUser,
    optionOne: question.optionOne,
    optionTwo: question.optionTwo,

    author: Users[question.author].name,
    pollSize: question.optionOne.votes.length + question.optionTwo.votes.length,
    id,
    toggleView,
    avatar,
    choosenOp,
    optionOnePercentage,
    optionTwoPercentage


    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
  };
}

export default connect(mapStateToProps)(Results);
