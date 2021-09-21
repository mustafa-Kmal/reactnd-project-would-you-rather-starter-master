import React, { Component, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import {
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialUsers, handleInitialDataUser } from "./actions/shared";
import NotFound from "./components/NotFound";
import QDetails from "./components/QDetails";
import NavList from "./components/NavList";
import Home from "./components/Home";
import LeaderboardList from "./components/Leaderboard/LeaderboardList";
import NewQuestionCard from "./components/NewQuestionCard";

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
        <header>
          <NavList />
        </header>
        <Fragment>
          {!this.props.logged ? (
            <Login handleChoosenUser={this.handleChoosenUser} />
          ) : (
            <Switch>
              {window.location.href.includes("/questions/question:") && (
                <Route path='/question:id' render={() => <QDetails />} />
              )}

              <Route exact path='/Login'>
                <Redirect to='/questions' />
              </Route>
              <Route path='/questions'>
                <Home />
              </Route>

              <Route path='/add'>
                <NewQuestionCard />
              </Route>

              <Route path='/leaderboard'>
                <LeaderboardList />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          )}
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
