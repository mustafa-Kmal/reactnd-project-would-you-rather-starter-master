import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AnsedQList from "./Answered/AnsedQList";
import UnAnsedQList from "./UnAnswered/UnAnsedQList";
import { NavLink } from "react-router-dom";
import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";
import Nav from "react-bootstrap/Nav";

class Home extends Component {
  render() {
    return (
      <div className='App second-tab'>
        <header>
          <Nav className='tab link ' activeKey='Unanswered Questions'>
            <Nav.Item>
              <Nav.Link eventKey='Answered Questions'>
                {" "}
                <NavLink className='tabLink' to='/questions/A'>
                  {" "}
                  Answered Questions{" "}
                </NavLink>{" "}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey='Unanswered Questions'>
                {" "}
                <NavLink className='tabLink' to='/questions/U'>
                  {" "}
                  Unanswered Questions{" "}
                </NavLink>{" "}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </header>
        <body className='App-header '>
          <Route exact path='/questions'>
            <Redirect to='/questions/U' />
          </Route>
          <Route path='/questions/A'>
            <AnsedQList />
          </Route>

          <Route path='/questions/U'>
            <UnAnsedQList />
          </Route>
        </body>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, Questions, Users }) {
  const authed = Users[authedUser];
  console.log('9999999999999999' , authedUser)


  return {
    QuestionsIds: Object.keys(Questions),
    questions: Questions,
    authedUser,

    Users,
    
  };
}

export default withRouter(connect(mapStateToProps)(Home));

/*

http://localhost:3000/questions/question:xj352vofupe1dqz9emx13r


*/
