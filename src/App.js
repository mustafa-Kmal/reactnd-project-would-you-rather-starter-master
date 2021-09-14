import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import QuestionCard from "./components/QuestionCard";
import NewQuestionCard from "./components/NewQuestionCard";
import Results from "./components/Answered/Results";
import ListTile from "./components/Leaderboard/ListTile";
import Home from "./components/Home";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "./components/Login";
import Avatar from "react-avatar";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialUsers, handleInitialDataUser } from "./actions/shared";
import Dashboard from "./components/Dashboard";

class App extends Component {
  state = {
    selelctedUser: "",
  };
  componentDidMount() {
    this.props.dispatch(handleInitialUsers());
  }

  handleChoosenUser = (user) => {
    // console.log(user);
    const USER = this.props.Users[user];
    // this.setState(() => ({
    //   selelctedUser: USER.id
    // }))
    this.props.dispatch(handleInitialDataUser(USER.id));
  };

  render() {
    return (
      <div className='App App-header'>
        {/* <header className='App-header'> */}

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
        {/* <Route exact path='/Dashboard/Home' render={() => <Home />} /> */}

        {/* <Route exact path='/User' render={() => {
         
        }} /> */}
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
