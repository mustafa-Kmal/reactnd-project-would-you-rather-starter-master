import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
// import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

class UnAnsweredQTile extends Component {
  handleShowing = (id) => {
    this.props.toggleView();
    this.props.handleId(id);
  };
  render() {
    // console.log(this.props);

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
                  <Card.Text>{this.props.optionOne.text}</Card.Text>

                  <Button
                    variant='secondary'
                    size='md'
                    onClick={() => {
                      this.handleShowing(this.props.id);
                      // return <Results id={this.props.id} />
                    }}>
                    <Link className='link' to={`/questions/question:${this.props.id}`}>
                      {/* {console.log(this.props.id)} */}
                      View this Poll
                    </Link>
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
      // </Link>
    );
  }
}

function mapStateToProps(
  { authedUser, Questions, Users },
  { id, showingUnAnsweredState, toggleView, handleId }
) {
  const question = Questions[id];
  const avatar = Users[question.author].avatarURL;
  return {
    authedUser,
    optionOne: question.optionOne,
    avatar,
    author: Users[question.author].name,

    id,
    showingUnAnsweredState,
    toggleView,
    handleId,

    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
  };
}

export default connect(mapStateToProps)(UnAnsweredQTile);
