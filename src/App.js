import React, { Component, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialUsers, handleInitialDataUser } from "./actions/shared";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  state = {
    selelctedUser: "",
  };
  componentDidMount() {
    this.props.dispatch(handleInitialUsers());
  }

  handleChoosenUser = (user) => {
    const USER = this.props.Users[user];

    this.props.dispatch(handleInitialDataUser(USER.id));
  };

  render() {
    return (
      <div className='App App-header'>
        {/* <header className='App-header'> */}
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route
                exact
                path='/'
                render={() => {
                  return this.props.loadingUsers === true ? null : (
                    <Login handleChoosenUser={this.handleChoosenUser} />
                  );
                }}
              />

              <Route
                path='/Dashboard'
                render={() => {
                  return this.props.loadingQuestions === true ||
                    this.props.loadingauthedUser === true ? null : (
                    <Dashboard />
                  );
                }}
              />
{/* 
                  <PrivateRoute path='/dashboard' exact component={Dashboard} />
									<PrivateRoute path='/add' exact component={NewQuestion} />
									<PrivateRoute path='/question:' component={QuestionDetail} />
									<PrivateRoute path='/leaderboard' component={Leaderboard} />


 */}




              {/* <NotFound /> */}
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ Users, authedUser, Questions }) {
  return {
    loadingUsers: Users === null,
    loadingQuestions: Questions === null,
    loadingauthedUser: authedUser === null,

    Users,
  };
}

export default connect(mapStateToProps)(App);
