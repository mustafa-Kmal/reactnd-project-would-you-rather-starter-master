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

class Home extends Component {
  state = {
    ShowingAnswered: true,
    ShowingAnsweredId: "",
    ShowingUnAnswered: true,
    ShowingUnAnsweredId: "",
    ShowingResults: false,
    activeKey: "Unanswered Questions",
  };

  handleactiveKey = (key) => {
    // console.log("active key is : ", this.state.activeKey);
    this.setState(() => ({
      activeKey: key,
    }));
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
    this.setState((currState) => ({
      ShowingUnAnswered: true,
      ShowingResults: false,
    }));
    this.handleactiveKey("Unanswered Questions");
  };

  handleIdUnAnswered = (id) => {
    this.setState((currState) => ({
      ShowingUnAnsweredId: id,
    }));
  };
  render() {
    return (
      <Route
         path='/questions'
        // path='/'

        render={() => {
          return (
            <div className='App second-tab'>
              <Tabs
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
                      // onClick={()=> this.props.ShowingAnswered()}
                    >
                      Answered Questions
                    </Link>
                  }
                  className='link'>
                  {/* {this.state.ShowingAnswered === true ? ( */}

                  {this.state.ShowingAnsweredId === "" ? (
                    <AnsedQList
                      AnsedQs={this.props.AnsedQs}
                      showingAnsweredState={this.state.ShowingAnswered}
                      toggleView={this.handleToggleShowing}
                      // toggleView={this.props.ShowingAnswered}

                      handleId={this.handleId}
                    />
                  ) : (
                    <Results
                      toggleView={this.handleToggleShowing}
                      // toggleView={this.props.ShowingAnswered}

                      id={this.state.ShowingAnsweredId}
                    />
                  )}
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
                  {this.state.ShowingUnAnswered === true ? (
                    <UnAnsedQList
                      UnAnsedQs={this.props.UnAnsedQs}
                      showingUnAnsweredState={this.state.ShowingUnAnswered}
                      toggleView={this.handleToggleShowingUnAnswered}
                      handleId={this.handleIdUnAnswered}
                    />
                  ) : this.state.ShowingResults === false ? (
                    <QuestionCard
                      toggleView={this.handleToggleShowingUnAnswered}
                      id={this.state.ShowingUnAnsweredId}
                      toggleResultsView={this.handleToggleShowing}
                      PassResultsId={this.handleId}
                      changeToResultsView={this.handleShowingResults}
                    />
                  ) : (
                    <Results id={this.state.ShowingAnsweredId} />
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
  { ShowingAnswered, state }
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
    ShowingAnswered,
    state,
  };
}

export default connect(mapStateToProps)(Home);
