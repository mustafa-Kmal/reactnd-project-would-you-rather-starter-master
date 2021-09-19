import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
// import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import Button from "react-bootstrap/Button";

import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    selelctedUser: "",
    toHome: false,
  };

  handleChoosenUser2 = (user) => {
    // this.props.handleChoosenUser(user);
    // this.setState(() => ({
    //   toHome: true,
    // }));

    this.setState(() => ({
      selelctedUser: user,
    }));
  };

  setSelectedUser = () => {
    // e.preventDefault()

    this.props.handleChoosenUser(this.state.selelctedUser);
    this.props.isLogged();

    this.setState(() => ({
      toHome: true,
    }));
  };

  render() {
    const { from } = this.props.location || {
      from: { pathname: "/questions" },
    };
    if (this.state.toHome === true) {
      // console.log(
      //   ",,,,,,,,,,,,,,,,,,,,,should now be redirected",
      //   this.state.toHome
      // );
      return <Redirect className='link' to={from} />;
    }
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
            // onClick={() =>  this.props.isLogged }

            disabled={this.state.selelctedUser === ""}>
            <Link to={`/questions`} className='link'>
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
  // const issLogged = isLogged();
  // console.log(".....................................s", issLogged, authedUser);
  return {
    UsersIds: Object.keys(Users),
    Users,
    isLogged,
    authedUser,
  };
}

export default connect(mapStateToProps)(Login);

/*

http://localhost:3000/questions/question:xj352vofupe1dqz9emx13r


*/
