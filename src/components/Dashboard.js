import React, { Component } from "react";
// import logo from "./logoss.svg";
// import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import QuestionCard from "./QuestionCard";
import NewQuestionCard from "./NewQuestionCard";
import Results from "./Answered/Results";
import ListTile from "./Leaderboard/ListTile";
import LeaderboardList from './Leaderboard/LeaderboardList'
import Home from "./Home";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "./Login";
import Avatar from "react-avatar";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    // console.log(this.props);ss

    return (
      <div className='App App-header'>
        {/* <header className='App-header'> */}

        <Tabs
          defaultActiveKey='Home'
          id='uncontrolled-tab-example'
          className='mb-3 tab'>
          <Tab
            eventKey='Home'
            title={
              "Home"
              //   <Link className='link' to='/User/Dashboard/Home'>
              //     Home
              //   </Link>
            }>
            {/* <Route exact path='/User/Dashboard/Home' render={() => <Home />} /> */}
            <Home authUser={"johndoe"}/>
          </Tab>

          <Tab
            eventKey='profile'
            title={
              "New Question"
              //   <Link className='link' to='/User/Dashboard/NewQuestionCard'>
              //     New Question
              //   </Link>
            }>
            {/* <Route
              exact
              path='/User/Dashboard/NewQuestionCard'
              render={() => <NewQuestionCard />}
            /> */}
            <NewQuestionCard authUser={"johndoe"}/>
          </Tab>

          <Tab
            eventKey='contact'
            title={
              "Leader Board"
              //   <Link className='link' to='/User/Dashboard/Leader-Board'>
              //     Leader Board
              //   </Link>
            }>
            {/* <Route exact path='/User/Dashboard/Leader-Board' render={() => <ListTile />} /> */}
            <LeaderboardList authUser={"johndoe"}/>
          </Tab>
          <Tab eventKey='contact' title={`Signed in as: ${this.props.authedUser}`} disabled></Tab>
        </Tabs>

      </div>
    );
  }
}

function mapStateToProps({ Questions , authedUser}  ) {
  return {
    QuestionsIds: Object.keys(Questions),
    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
    authedUser,
  };
}

export default connect(mapStateToProps)(Dashboard);
