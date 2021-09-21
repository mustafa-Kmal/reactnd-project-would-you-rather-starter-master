import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { Component } from "react";
import UnAnsweredQTile from "./UnAnsweredQTile";

class UnAnsedQList extends Component {
  render() {
    return (
      <div className='App'>
        <ul>
          {this.props.QuestionsIds.map((id) => {
            return (
              <li key={id}>
                <UnAnsweredQTile id={id} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, Questions, Users }) {
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

    UnAnsedQs: UnAnsedQs,
  };
}

export default connect(mapStateToProps)(UnAnsedQList);
