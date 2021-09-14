import React, { Component } from "react";
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
import { render } from "@testing-library/react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { handleInitialData } from "../actions/shared";

class Login extends Component {
  state = {
    selelctedUser: "",
  };

  handleChoosenUser2 = (user) => {
    this.props.handleChoosenUser(user);
  };

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
            <Card.Header>Select User to login </Card.Header>

            <Container>
              <Dropdown>
                <Dropdown.Toggle
                  id='dropdown-button-dark-example1'
                  variant='secondary'>
                  {this.state.selelctedUser === ""
                    ? "Select a User"
                    : this.state.selelctedUser}
                </Dropdown.Toggle>

                <Dropdown.Menu variant='dark'>
                  {this.props.UsersIds.map((id) => {
                    const user = this.props.Users[id];
                    return (
                      <Dropdown.Item
                        onClick={() => this.handleChoosenUser2(id)}>
                        <Link to={`/Dashboard/Home/Answered`} className='link'>
                          {user.name}
                        </Link>
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Container>
          </Card>
        </header>
      </div>
    );
  }
}

function mapStateToProps({ Users }, { handleChoosenUser }) {
  return {
    UsersIds: Object.keys(Users),
    Users,
    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
  };
}

export default connect(mapStateToProps)(Login);
