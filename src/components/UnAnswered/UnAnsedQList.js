// import logo from "../logo.svg";
// import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { Component } from "react";
// import { handleInitialData } from "../../actions/shared";
import UnAnsweredQTile from "./UnAnsweredQTile";
import { Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";

class UnAnsedQList extends Component {
  render() {
    return (
      <Route
        path='/questions'
        render={() => {
          return (
            <div className='App'>
              <ul>
                {this.props.QuestionsIds.map((id) => {
                  return (
                    <li key={id}>
                      <UnAnsweredQTile
                        id={id}
                        handleactiveKey={this.props.handleactiveKey}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }}
      />
    );
  }
}
function mapStateToProps(
  { authedUser, Questions, Users },
  { handleactiveKey }
) {
  // console.log(UnAnsedQs)
  // const AnsedQs2 = Object.keys(Users[authedUser].answers);

  // const UnAnsedQs2 = Object.keys(Questions).filter(
  //   (el) => !AnsedQs2.includes(el)
  // );
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
    QuestionsIds: UnAnsedQs.sort((a, b) => {
      return Questions[b].timestamp - Questions[a].timestamp;
    }),
    questions: Questions,
    users: Users,
    authedUser,
    
    UnAnsedQs : UnAnsedQs,
    
    handleactiveKey,
  };
}

export default connect(mapStateToProps)(UnAnsedQList);
