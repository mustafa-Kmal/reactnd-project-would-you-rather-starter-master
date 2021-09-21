import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";


class ListTile extends Component {
  render() {
    return (
      <div className='App'>
        <Card
          bg={"dark"}
          text={"white"}
          border='dark'
          style={{ width: "100%" }}
          className='mb-2'>
          <Card.Header>{this.props.user.name}</Card.Header>
          <Container>
            <Row>
              <Col xs={2}>
                {" "}
                <Figure>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt='171x180'
                    src={this.props.user.avatarURL}
                  />
                </Figure>
              </Col>
              <Col>
                {" "}
                <Card.Body>
                  <Card.Text> Answered Question {this.props.answers}</Card.Text>
                  <Card.Text>
                    {" "}
                    Created Question {this.props.questions}
                  </Card.Text>
                </Card.Body>
              </Col>

              <Col xs={3}>
                <Card
                  bg={"dark"}
                  // key={idx}
                  text={"white"}
                  border='light'
                  style={{ width: "6rem" }}
                  className='mb-2'>
                  <Card.Header>Score </Card.Header>
                  <Card.Body>{this.props.points}</Card.Body>
                  <Container></Container>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, Users }, { id }) {
  const User = Users[id];
  const Answers =
    typeof User.answers !== "undefined" ? Object.keys(User.answers).length : 0;
  const Questions =
    typeof User.questions !== "undefined"
      ? Object.keys(User.questions).length
      : 0;
  const Points = Answers + Questions;

  return {
    authedUser,
    answers: Answers,
    questions: Questions,
    points: Points,

    Id: id,
    user: User
  };
}

export default connect(mapStateToProps)(ListTile);
