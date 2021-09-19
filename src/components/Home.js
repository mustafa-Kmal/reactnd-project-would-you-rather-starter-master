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
    // activeKey :  'Unanswered Questions'
    activeKey: this.props.HomeActiveKey,
    isQAnsed: false,

    ansedQs: this.props.AnsedQs,
    unAnsedQs: this.props.UnAnsedQs,
  };

  handleactiveKey = (key) => {
    // console.log("active key is : ", this.state.activeKey);
    this.setState(() => ({
      activeKey: key,
    }));
    // console.log("active key is : ", this.state.activeKey);
  };

  handleResetAnsed = () => {
    this.setState(() => ({
      ShowingAnsweredId: "",
      ShowingAnswered: true,
    }));
    this.handleactiveKey("Answered Questions");
  };

  handleResetUnAnsed = () => {
    // this.setState(() => ({
    //   ShowingUnAnswered: true,
    //   ShowingResults: false,
    // }));

    this.handleactiveKey("Unanswered Questions");
  };

  // shouldComponentUpdate = (nextState) => {
  //   console.log('will rerender' , this.isQAnsed())
  //   this.isQAnsed();
  // };
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
                      onClick={() => this.handleResetAnsed()}>
                      Answered Questions
                    </Link>
                  }
                  className='link'>
                  {this.state.activeKey === "Answered Questions" ? (
                    <AnsedQList
                      AnsedQs={this.props.AnsedQs}
                      handleactiveKey={this.handleactiveKey}
                    />
                  ) : null}
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
                  {this.state.activeKey === "Unanswered Questions" ? (
                    <UnAnsedQList
                      UnAnsedQs={this.props.UnAnsedQs}
                      handleactiveKey={this.handleactiveKey}
                    />
                  ) : null}
                </Tab>

                <Tab
                  eventKey='Question details'
                  title={`Question details`}
                  disabled={!window.location.href.includes("question:")}
                  // onSelect={this.isQAnsed()}
                >
                  {window.location.href.includes("/questions/question:") &&
                    (this.state.activeKey === "Question details" ? (
                      <QDetails />
                    ) : null)}
                </Tab>
              </Tabs>
            </div>
          );
        }}
      />
    );
  }
}

function mapStateToProps({ authedUser, Questions, Users }, { HomeActiveKey }) {
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

  // const AnsedQs2 = Object.keys(Users[authedUser].answers);

  // const UnAnsedQs2 = Object.keys(Questions).filter(
  //   (el) => !AnsedQs2.includes(el)
  // );

  // console.log(' answered are ',AnsedQs2  , 'unanswered are ', UnAnsedQs2 ,  Object.keys(Questions).length )

  return {
    QuestionsIds: Object.keys(Questions),
    questions: Questions,
    users: Users,
    authedUser,
    AnsedQs: AnsedQs,
    // AnsedQs: AnsedQs2,

    // AnsedQs: Object.keys( Users[authedUser].answers),
    // UnAnsedQs: UnAnsedQs2,

    UnAnsedQs: UnAnsedQs,
    Users,
    HomeActiveKey,
  };
}

export default connect(mapStateToProps)(Home);
