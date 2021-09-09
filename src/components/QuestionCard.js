import logo from "../logo.svg";
import "../App.css";
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

function QuestionCard() {
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
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  {/* the radio buttons should be disabled if there's no question available in case of new question  */}
                  <div key={`default-radio`} className='mb-3'>
                    <Form.Check
                      type='radio'
                      id={`default-radio`}
                      label={`Option 1`}
                    />

                    <Form.Check
                      type='radio'
                      id={`default-radio`}
                      label={`options 2`}
                    />
                  </div>

                  <Button variant='secondary' size='md'>
                    Submit
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Container>
        </Card>
      </header>
    </div>
  );
}

export default QuestionCard;
