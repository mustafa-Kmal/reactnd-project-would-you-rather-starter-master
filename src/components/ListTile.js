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
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";

function ListTile() {
  return (
    <div className='App'>
      <header className='App-header'>
        <br />

        <Card
          bg={"dark"}
          // key={idx}
          text={"white"}
          border='dark'
          style={{ width: "100%" }}
          className='mb-2'>
          <Card.Header>Sarah Edo</Card.Header>

          <Container>
            <Row>
              <Col xs={2}>
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
                  
                  <Card.Text> Answered Question 15 </Card.Text>
                  <Card.Text> Created Question 10</Card.Text>
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
                  <Card.Body  >25</Card.Body>
                  <Container></Container>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </header>
    </div>
  );
}

export default ListTile;
