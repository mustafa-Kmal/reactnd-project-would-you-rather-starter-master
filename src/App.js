import React, { Component, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
    isAuthed: false,
  };
  componentDidMount() {
    this.props.dispatch(handleInitialUsers());
  }

  handleChoosenUser = (user) => {
    const USER = this.props.Users[user];

    this.props.dispatch(handleInitialDataUser(USER.id));
  };

  isLogged = () => {
    // e.preventDefault()
    // console.log(",,,,,,,,,,,,,,,,,,,,this.state.isAuthed", this.state.isAuthed);
    const isAuthed = this.state.isAuthed;

    this.setState(() => ({
      isAuthed: !isAuthed,
    }));
    // e.stopPropagation()

    // console.log(",,,,,,,,,,,,,,,,,,,,this.state.isAuthed", this.state.isAuthed);

    return this.state.isAuthed;
  };

  render() {
    return (
      <div className='App App-header'>
        <Fragment>
          <Switch>
            <Route
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
            />
            {/* <Route  PrivateRoute */}
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
            <NotFound />;
          </Switch>
        </Fragment>
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
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
