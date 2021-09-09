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
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

function Login() {
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
          <Card.Header>Select User to login </Card.Header>

          <Container>
            {/* <Form.Select aria-label='Default select example'>
              <option>Select User to login </option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </Form.Select> */}

            <Dropdown>
              <Dropdown.Toggle
                id='dropdown-button-dark-example1'
                variant='secondary'>
                Select User
              </Dropdown.Toggle>

              <Dropdown.Menu variant='dark'>
              <Dropdown.Item>
                  {" "}
                  <Link to='/User'  className='link'>
                    User 1
                  </Link>{" "}
                </Dropdown.Item>
                <br />


                
                <Dropdown.Item>
                  {" "}
                  <Link to='/User' className='link'>
                    User 2
                  </Link>{" "}
                </Dropdown.Item>
                <br />


                <Dropdown.Item>
                  {" "}
                  <Link to='/User' className='link'>
                    User 3
                  </Link>{" "}
                </Dropdown.Item>
                <br />


                <Dropdown.Item>
                  {" "}
                  <Link to='/User' className='link' >
                    User 4
                  </Link>{" "}
                </Dropdown.Item>
                <br />


                <br />
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Card>
      </header>
    </div>
  );
}

export default Login;
