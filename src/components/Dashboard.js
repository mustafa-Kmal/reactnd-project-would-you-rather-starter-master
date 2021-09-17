import React, { Component } from "react";
import NewQuestionCard from "./NewQuestionCard";
import LeaderboardList from "./Leaderboard/LeaderboardList";
import Home from "./Home";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
// import { Route } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
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

  handleToggleShowing = () => {
    const toggle = this.state.ShowingAnswered;

    this.setState(() => ({
      ShowingAnswered: !toggle,
    }));
  };

  handleactiveKey = (key) => {
    this.setState(() => ({
      activeKey: key,
    }));
  };

  handleLogout = () => {
    this.props.dispatch(handleInitialDataUser(null));
  };

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
                to='/questions'
                onClick={() => {
                  this.handleactiveKey("Home");
                  this.handleToggleShowing();
                }}>
                Home
              </Link>
            }>
            <Home
              ShowingAnswered={this.handleToggleShowing}
              state={this.state.ShowingAnswered}
            />
          </Tab>

          <Tab
            eventKey='New Question'
            title={
              <Link
                className='link'
                to='/add'
                onClick={() => {
                  this.handleactiveKey("New Question");
                }}>
                New Question
              </Link>
            }>
            <NewQuestionCard toggleTabView={this.handleactiveKey} />
          </Tab>

          <Tab
            eventKey='leaderboard'
            title={
              <Link
                className='link'
                to='/leaderboard'
                onClick={() => {
                  this.handleactiveKey("leaderboard");
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
              <Link className='link' to='/Login' onClick={this.handleLogout}>
                Log out
              </Link>
            }></Tab>

          {/* <Tab
            eventKey='logout'
            // title={`Signed in as: ${this.props.authedUser}`}

            title={
              <Link className='link' to='/' >
                Log out
              </Link>
            }></Tab> */}
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
