import React, { Component } from "react";
import NewQuestionCard from "./NewQuestionCard";
import LeaderboardList from "./Leaderboard/LeaderboardList";
import Home from "./Home";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
// import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialDataUser } from "../actions/shared";

class Dashboard extends Component {
  state = {
    ShowingAnswered: true,
    ShowingAnsweredId: "",
    ShowingUnAnswered: true,
    ShowingUnAnsweredId: "",
    activeKey: "Home",
  };

  handleactiveKey = (key) => {
    // console.log("active key is : ", this.state.activeKey);
    this.setState(() => ({
      activeKey: key,
    }));
  };

  handleLogout = () => {
    this.props.dispatch(handleInitialDataUser(null));
  };

  //   handleLogout = () =>{

  //   }

  render() {
    return (
      <div className='App App-header'>
        {/* <header className='App-header'> */}

        <Tabs
          activeKey={this.state.activeKey}
          defaultActiveKey='Home'
          id='uncontrolled-tab-example'
          className='mb-3 tab'>
          <Tab
            eventKey='Home'
            title={
              <Link
                className='link'
                to='/Dashboard/Home/Unanswered'
                onClick={() => {
                  this.handleactiveKey("Home");
                }}>
                Home
              </Link>
            }>
            <Home />
          </Tab>

          <Tab
            eventKey='New Question'
            title={
              <Link
                className='link'
                to='/Dashboard/add'
                onClick={() => {
                  this.handleactiveKey("New Question");
                }}>
                New Question
              </Link>
            }>
            <NewQuestionCard toggleTabView={this.handleactiveKey} />
          </Tab>

          <Tab
            eventKey='Leader-Board'
            title={
              <Link
                className='link'
                to='/Dashboard/Leader-Board'
                onClick={() => {
                  this.handleactiveKey("Leader-Board");
                }}>
                Leader Board
              </Link>
            }>
            <LeaderboardList />
          </Tab>

          <Tab
            eventKey='user'
            title={`Signed in as: ${this.props.name}`}
            disabled></Tab>

          <Tab
            eventKey='logout'
            // title={`Signed in as: ${this.props.authedUser}`}

            title={
              <Link className='link' to='/' onClick={this.handleLogout}>
                Log out
              </Link>
            }></Tab>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ Questions, authedUser, Users }) {
  const name = Users[authedUser].name;
  return {
    QuestionsIds: Object.keys(Questions),
    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
    name,
  };
}

export default connect(mapStateToProps)(Dashboard);
