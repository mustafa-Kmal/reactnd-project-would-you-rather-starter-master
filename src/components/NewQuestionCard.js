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

function NewQuestionCard() {
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
                  <Card.Text>
                    
                  </Card.Text>

                  {/* the radio buttons should be disabled if there's no question available in case of new question  */}
                  <div key={`default-radio`} className='mb-3'>
                    <Col>
                      <Form.Control size="sm" type='text' placeholder='Option 1 goes here' />
                    </Col>
                    
                       ــــــــــــــــ OR ــــــــــــــــ 
                    <br/>

                    <Col>
                      <Form.Control  size="sm" type='text' placeholder='Option 2 goes here' />
                    </Col>
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

export default NewQuestionCard;
