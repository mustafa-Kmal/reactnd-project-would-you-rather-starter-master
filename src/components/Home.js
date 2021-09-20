import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import QuestionCard from "./UnAnswered/QuestionCard";
import AnsedQList from "./Answered/AnsedQList";
import UnAnsedQList from "./UnAnswered/UnAnsedQList";
import { Link } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";
import Results from "./Answered/Results";
import PrivateRoute from "./PrivateRoute";
import QDetails from "./QDetails";

class Home extends Component {
  /*

http://localhost:3000/questions/question:xj352vofupe1dqz9emx13r


*/

  componentDidMount() {
    console.log(window.location.href.includes("/questions/question:"));
    window.location.href.includes("/questions/question:") &&
      this.handleResetDetails();
    !window.location.href.includes("/questions/question:") &&
      this.handleResetUnAnsed();
  }
  state = {
    // activeKey :  'Unanswered details',
    activeKey: this.props.HomeActiveKey,
    isQAnsed: false,

    ansedQs: this.props.AnsedQs,
    unAnsedQs: this.props.UnAnsedQs,
  };

  handleactiveKey = (key) => {
    console.log("i came here for some reason 22 ");
    this.setState(() => ({
      activeKey: key,
    }));
    // console.log("active key is : ", this.state.activeKey);
  };

  handleResetAnsed = () => {
    this.handleactiveKey("Answered Questions");
  };

  handleResetUnAnsed = () => {
    this.handleactiveKey("Unanswered Questions");
  };

  handleResetDetails = () => {
    console.log("i came here for some reason ");
    this.handleactiveKey("Question details");
  };

  componentDidUpdate() {}

  render() {
    return (
      <Route
        path='/questions'
        // path='/'

        render={() => {
          return (
            <div className='App second-tab'>
              <Tabs
                // activeKey= {this.state.activeKey}
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
                      // AnsedQs={this.props.AnsedQs}
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
                      // UnAnsedQs={this.props.UnAnsedQs}
                      handleactiveKey={this.handleactiveKey}
                    />
                  ) : null}
                </Tab>

                <Tab
                  eventKey='Question details'
                  title={`Question details`}
                  // disabled={!window.location.href.includes("question:")}
                  // onSelect={() => this.handleactiveKey("Question details")}
                >
                  {window.location.href.includes("/questions/question:") &&
                    (this.state.activeKey === "Question details" ? (
                      // <Route path='/questions/question:' render ={()=> <QDetails /> }/>
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
  return {
    QuestionsIds: Object.keys(Questions),
    questions: Questions,
    authedUser,

    Users,
    HomeActiveKey,
  };
}

export default withRouter(connect(mapStateToProps)(Home));

/*

http://localhost:3000/questions/question:xj352vofupe1dqz9emx13r


*/
