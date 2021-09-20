import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import Button from "react-bootstrap/Button";
import { createBrowserHistory } from "history";

class Login extends Component {
  // componentDidMount() {
  //   this.setState(() => ({
  //     upadteFrom: this.props.customHistory.location.state.from,
  //   }));
  // }
  state = {
    selelctedUser: "",
    toHome: false,
    upadteFrom: '',
  };

  handleChoosenUser2 = (user) => {
  

    this.setState((prev) => ({
      selelctedUser: prev.selelctedUser=user,
      
    }));
  };

  setSelectedUser = () => {
    // e.preventDefault()

    this.props.handleChoosenUser(this.state.selelctedUser);
    
  };

  render() {

 
    return (
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
                : this.props.Users[this.state.selelctedUser].name}
            </Dropdown.Toggle>

            <Dropdown.Menu variant='dark'>
              {this.props.UsersIds.map((id) => {
                const user = this.props.Users[id];
                return (
                  <Dropdown.Item
                    key={id}
                    onClick={() => this.handleChoosenUser2(id)}>
                    {user.name}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Button
            className='btn btn-primary '
            variant='secondary'
            size='sm'
            onClick={() => {
              this.setSelectedUser();
            }}

            disabled={this.state.selelctedUser === ""}>
            <Link
              to={`/questions`}
              className='link'
            >
              Log in
            </Link>
          </Button>
        </Container>
      </Card>
    );
  }
}

function mapStateToProps(
  { Users, authedUser },
  { handleChoosenUser, isLogged }
) {


  return {
    UsersIds: Object.keys(Users),
    Users,
    isLogged,
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(Login));

/*

http://localhost:3000/questions/question:xj352vofupe1dqz9emx13r


*/

