import React, { Component } from "react";
import NewQuestionCard from "./NewQuestionCard";
import LeaderboardList from "./Leaderboard/LeaderboardList";
import Home from "./Home";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
// import { Route } from "react-router-dom";
import { Link, Redirect , useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialDataUser } from "../actions/shared";

class Dashboard extends Component {
  state = {
    ShowingAnswered: true,
    ShowingAnsweredId: "",
    ShowingUnAnswered: true,
    ShowingUnAnsweredId: "",
    ShowingResults: false,

    activeKey: "Home",
    HomeActiveKey: "Unanswered Questions",

  };

  handleResetHome = ( key ) => {
    // console.log("ShowingUnAnswered is: " , this.state.ShowingUnAnswered, " showing results is ", this.state.ShowingResults)
    this.handleactiveKey(key);
    
  };

  handleHomeActiveKey = (key) => {
    this.setState(() => ({
      HomeActiveKey: key,
    }));
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
                // to='/questions'
                to={{
                  pathname: '/questions',
                  // state: { activeKey: "Home" },
                }}
                onClick={() => {
                  // this.handleactiveKey("Home");
                  // this.handleToggleShowing();
                  this.handleResetHome( "Home" );
                  // window.history.pushState({activeKey: "Home"}, '', 'http://localhost:3000/questions')

                }}>
                Home
              </Link>
            }>
            <Home
              ShowingAnswered={this.handleToggleShowing}
              state={this.state.ShowingAnswered}
              ShowingAnsweredId={this.state.ShowingAnsweredId}
              ShowingAnswered={this.state.ShowingAnswered}
              ShowingUnAnswered={this.state.ShowingUnAnswered}
              ShowingResults ={this.state.ShowingResults}
              HomeActiveKey={this.state.HomeActiveKey}
            />
          </Tab>

          <Tab
            eventKey='New Question'
            title={
              <Link
                className='link'
                // to='/add'
                to={{
                  pathname: '/add',
                  // state: { activeKey: "New Question" },
                }}
                onClick={() => {
                  this.handleactiveKey("New Question");
                  window.history.pushState({activeKey: "New Question"}, '', 'http://localhost:3000/add')


                }}>
                New Question
              </Link>
            }>
            <NewQuestionCard toggleTabView={this.handleactiveKey}
            HomeActiveKey={this.handleHomeActiveKey} />
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
