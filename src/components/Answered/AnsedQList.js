import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import { Component } from "react";
import AnsweredQTile from "./AnsweredQTile";
import { Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";

class AnsedQList extends Component {
 
  render() {
    return (
      <div>
        <Route
          path='/questions'
          render={() => {
            return (
              <ul>
                {this.props.AnsedQs.map((id) => {
                  return (
                    <li key={id}>
                      <AnsweredQTile
                        id={id}
                        handleactiveKey={this.props.handleactiveKey}
                      />
                    </li>
                  );
                })}
              </ul>
            );
          }}
        />
      </div>
    );
  }
}
function mapStateToProps(
  { Questions, Users, authedUser },
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
    QuestionsIds: AnsedQs.sort((a, b) => {
      return Questions[b].timestamp - Questions[a].timestamp;
    }),
    questions: Questions,
    users: Users,

    // handleId,
    // handleactiveKey,
    // // AnsedQs: Object.keys( Users[authedUser].answers),
    AnsedQs,
  };
}

export default connect(mapStateToProps)(AnsedQList);
