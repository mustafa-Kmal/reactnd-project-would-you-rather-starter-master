import React, { Component, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialUsers, handleInitialDataUser } from "./actions/shared";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import QDetails from "./components/QDetails";

class App extends Component {
  state = {
    selelctedUser: "",
    currentUserName: "logged out ",
    isAuthed: false,
  };
  componentDidMount() {
    this.props.dispatch(handleInitialUsers());
  }

  handleChoosenUser = (user) => {
    const USER = this.props.Users[user];
    this.props.dispatch(handleInitialDataUser(USER.id));

    this.setState(() => ({
      currentUserName: this.props.authedUser,
    }));
  };

  render() {
    return (
      <div className='App App-header'>
        <Fragment>
          {!this.props.logged ? (
            <Login handleChoosenUser={this.handleChoosenUser} />
          ) : (
            <Switch>
              <Route path='/questions/question:qid' component={QDetails} />

              <Route
                path='/'
                // isLogged={this.isLogged}
                render={() => {
                  return this.props.loadingQuestions === true ||
                    this.props.loadingauthedUser === true ? null : (
                    <Dashboard />
                  );
                }}
              />
              <Route path='/'>
                <Redirect to='/questions' />
              </Route>
              {/* <Route path='/questions/question:qid' component={QDetails} /> */}

              <Route path='*' component={NotFound} />
            </Switch>
          )}

          {/* <Route
            exact
            path='/Login'
            render={() => {
              return this.props.loadingUsers === true ? null : (
                <Login
                  isLogged={this.isLogged}
                  handleChoosenUser={this.handleChoosenUser}
                />
              );
            }}
          /> */}

          {/* <Switch>
            <Route
              path='/'
              isLogged={this.isLogged}
              render={() => {
                return this.props.loadingQuestions === true ||
                  this.props.loadingauthedUser === true ? null : (
                  <Dashboard />
                );
              }}
            />
            <Route path='/'>
              <Redirect to='/questions' />
            </Route>
            <Route path='/questions/question:qid' component={QDetails} />

            <Route path='*' component={NotFound} />
          </Switch> */}
        </Fragment>
      </div>
    );
  }
}

function mapStateToProps({ Users, authedUser, Questions }) {
  const logged = authedUser === null ? false : true;

  return {
    loadingUsers: Users === null,
    loadingQuestions: Questions === null,
    loadingauthedUser: authedUser === null,

    Users,
    authedUser,
    logged,
  };
}

export default withRouter(connect(mapStateToProps)(App));
