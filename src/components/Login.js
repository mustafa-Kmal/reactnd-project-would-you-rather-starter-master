import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";
import { connect } from "react-redux";

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
                      <Dropdown.Item key= {id}
                        onClick={() => this.handleChoosenUser2(id)}>
                        <Link to={`/Dashboard/Home/`} className='link'>
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
