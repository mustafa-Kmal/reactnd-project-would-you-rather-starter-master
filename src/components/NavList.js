import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink ,withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { handleInitialDataUser } from "../actions/shared";

function NavList (props) {
  function handleLogout ()  {
    props.dispatch(handleInitialDataUser(null));
  };
  return (
    <div>
      <Nav className='tabs  App nav tabLink' activeKey='Home'>
        <Nav.Item className='padding'>
            {" "}
            <NavLink
              activeClassName='active'
              className='tabLink'
              to='/questions'>
              {" "}
              Home{" "}
            </NavLink>{" "}
        </Nav.Item>
          
        <Nav.Item className='padding'>
            {" "}
            <NavLink activeClassName='active' className='tabLink' to='/add'>
              {" "}
              New Question{" "}
            </NavLink>{" "}
        </Nav.Item>

        <Nav.Item className='padding'>
            {" "}
            <NavLink
              activeClassName='active'
              className='tabLink'
              to= '/question'
              
              >
              Question details{" "}
            </NavLink>
        </Nav.Item>

        <Nav.Item className='padding'>
            {" "}
            <NavLink
              activeClassName='active'
              className='tabLink'
              to='/leaderboard'>
              {" "}
              Leader Board{" "}
            </NavLink>{" "}
        </Nav.Item>

        <Nav.Item className='signed padding'>Hello {props.UserName}</Nav.Item>

        <Nav.Item>
          {`   `}
          <Button variant='secondary' size='md'>
            <Link className='link' to={`/Login`} onClick={handleLogout}>
              Log out
            </Link>
          </Button>
        </Nav.Item>
      </Nav>
    </div>
  );
}
function mapStateToProps({ Questions, Users, authedUser }) {

  const UserName = authedUser
    ? Users[authedUser].name
    : "you are not signed in";


    // const handleLogout = () => {
    //     return (dispatch) =>{
    //     dispatch(handleInitialDataUser(null));

    //     }
    //   };

  return {
  
    UserName,
    // handleLogout
  };
}

export default withRouter(connect(mapStateToProps)(NavList));
