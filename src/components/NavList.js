import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink ,withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { handleInitialDataUser } from "../actions/shared";

class NavList extends Component {
  handleLogout = () => {
    this.props.dispatch(handleInitialDataUser(null));
  };
  render() {
    return (
      <div>
        <Nav className='tabs  App nav tabLink' activeKey='Home'>
          <Nav.Item>
            <Nav.Link eventKey='Home'>
              {" "}
              <NavLink
                activeClassName='active'
                className='tabLink'
                to='/questions'>
                {" "}
                Home{" "}
              </NavLink>{" "}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey='New Question'>
              {" "}
              <NavLink activeClassName='active' className='tabLink' to='/add'>
                {" "}
                New Question{" "}
              </NavLink>{" "}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey='Question details'>
              {" "}
              <NavLink
                activeClassName='active'
                className='tabLink'
                to= '/question'
                
                >
                Question details{" "}
              </NavLink>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey='leaderboard'>
              {" "}
              <NavLink
                activeClassName='active'
                className='tabLink'
                to='/leaderboard'>
                {" "}
                Leader Board{" "}
              </NavLink>{" "}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className='signed'>Hello {this.props.UserName}</Nav.Item>

          <Nav.Item>
            {`   `}
            <Button variant='secondary' size='md'>
              <Link className='link' to={`/Login`} onClick={this.handleLogout}>
                Log out
              </Link>
            </Button>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
function mapStateToProps({ Questions, Users, authedUser }) {

  const UserName = authedUser
    ? Users[authedUser].name
    : "you are not signed in";

  return {
  
    UserName,
  };
}

export default withRouter(connect(mapStateToProps)(NavList));
