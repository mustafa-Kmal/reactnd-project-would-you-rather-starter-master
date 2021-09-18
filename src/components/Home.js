import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import QuestionCard from "./UnAnswered/QuestionCard";
import AnsedQList from "./Answered/AnsedQList";
import UnAnsedQList from "./UnAnswered/UnAnsedQList";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";
import Results from "./Answered/Results";
import PrivateRoute from "./PrivateRoute";
import QDetails from "./QDetails";

class Home extends Component {
  state = {
    ShowingAnswered: true,
    ShowingAnsweredId: "",
    ShowingUnAnswered: true,
    ShowingUnAnsweredId: "",
    ShowingResults: false,

    // ShowingAnswered: this.props.ShowingAnswered,
    // ShowingAnsweredId: this.props.ShowingAnsweredId,
    // ShowingUnAnswered: this.props.ShowingUnAnswered,
    ShowingUnAnsweredId: "",
    // ShowingResults: this.props.ShowingResults,
    // activeKey: "Unanswered Questions",
    activeKey : this.props.HomeActiveKey
  };

  handleactiveKey = (key) => {
    console.log("active key is : ", this.state.activeKey);
    this.setState(() => ({
      activeKey: key,
    }));
    console.log("active key is : ", this.state.activeKey);
  };

  handleShowingResults = () => {
    const toggle = this.state.ShowingResults;
    this.setState(() => ({
      ShowingResults: !toggle,
    }));
  };

  handleToggleShowing = () => {
    const toggle = !this.state.ShowingAnswered;

    this.setState(() => ({
      ShowingAnswered: !toggle,
    }));
  };

  handleResetAnsed = () => {
    this.setState(() => ({
      ShowingAnsweredId: "",
      ShowingAnswered: true,
    }));
    this.handleactiveKey("Answered Questions");
  };

  handleId = (id) => {
    this.setState(() => ({
      ShowingAnsweredId: id,
    }));
  };

  handleToggleShowingUnAnswered = () => {
    const toggle = this.state.ShowingUnAnswered;
    this.setState((currState) => ({
      ShowingUnAnswered: !toggle,
    }));
  };

  handleResetUnAnsed = () => {
    // this.setState(() => ({
    //   ShowingUnAnswered: true,
    //   ShowingResults: false,
    // }));

    this.handleactiveKey("Unanswered Questions");
  };

  handleIdUnAnswered = (id) => {
    this.setState(() => ({
      ShowingUnAnsweredId: id,
    }));
  };

  getIdfromURL = () => {
    if (window.location.href.includes("question:")) {
      const length = window.location.href.length;
      const index = window.location.href.indexOf("n:");
      const ddid = window.location.href.substring(index + 2, length);

      console
        .log
        // "IIIIIIDDDDDDDDDD provided is  " , Object.keys(this.props.Users[this.props.authedUser].answers).includes(ddid) ,ddid
        ();

      return ddid;
    }
  };

  isQAnsed = (id) => {
    const isAnsed = Object.keys(
      this.props.Users[this.props.authedUser].answers
    ).includes(this.getIdfromURL())
      ? true
      : false;

    console.log(
      "IIIIIIDDDDDDDDDD provided is  ",
      Object.keys(this.props.Users[this.props.authedUser].answers).includes(
        this.getIdfromURL()
      )
    );

    return isAnsed;
  };

  render() {
  //  this.handleResetUnAnsed()

    return (
      <Route
        path='/questions'
        // path='/'

        render={() => {
          return (
            <div className='App second-tab'>
              <Tabs
                activeKey={this.state.activeKey}
                defaultActiveKey='Unanswered Questions'
                id='uncontrolled-tab-example'
                className='mb-3 second-tab'>
                <Tab
                  eventKey='Answered Questions'
                  title={
                    <Link
                      className='link'
                      to='/questions'
                      onClick={() => this.handleResetAnsed()}
                    >
                      Answered Questions
                    </Link>
                  }
                  className='link'>

                  <AnsedQList
                    AnsedQs={this.props.AnsedQs}
                    showingAnsweredState={this.state.ShowingAnswered}
                    toggleView={this.handleToggleShowing}
                    handleactiveKey={this.handleactiveKey}

                    handleId={this.handleId}
                  />

                </Tab>

                <Tab
                  eventKey='Unanswered Questions'
                  title={
                    <Link
                      className='link'
                      to='/questions'
                      onClick={this.handleResetUnAnsed}>
                      Unanswered Questions
                    </Link>
                  }
                  className='link'>
                  <UnAnsedQList
                    UnAnsedQs={this.props.UnAnsedQs}
                    showingUnAnsweredState={this.state.ShowingUnAnswered}
                    toggleView={this.handleToggleShowingUnAnswered}
                    handleId={this.handleIdUnAnswered}
                    handleactiveKey={this.handleactiveKey}
                  />
              
                </Tab>

                <Tab
                  eventKey='Question details'
                  title={
                    `Question details`
     
                  }
                  disabled={!window.location.href.includes("question:")}>
                 
                  {window.location.href.includes("/questions/question:") && (
                    <QDetails
                      getIdfromURL={this.getIdfromURL}
                      isQAnsed1={this.isQAnsed}
                    />
                  )}
                </Tab>
              </Tabs>
            </div>
          );
        }}
      />
    );
  }
}

function mapStateToProps(
  { authedUser, Questions, Users },
  {
    state,
    ShowingAnsweredId,
    ShowingAnswered,
    ShowingUnAnswered,
    ShowingResults,
    HomeActiveKey
  }
) {
  const AnsedQs = [];
  const UnAnsedQs = [];
  Object.entries(Questions).map((q) => {
    const op1 = q[1].optionOne.votes;
    const op2 = q[1].optionTwo.votes;
    if (!op1.includes(authedUser) && !op2.includes(authedUser)) {
      UnAnsedQs.push(q[1].id);
    } else {
      AnsedQs.push(q[1].id);
    }
  });

  return {
    QuestionsIds: Object.keys(Questions),
    questions: Questions,
    users: Users,
    authedUser,
    AnsedQs: AnsedQs,
    UnAnsedQs: UnAnsedQs,
    ShowingAnsweredId,
    ShowingAnswered,
    ShowingUnAnswered,
    state,
    ShowingResults,
    Users,
    HomeActiveKey
  };
}

export default connect(mapStateToProps)(Home);
