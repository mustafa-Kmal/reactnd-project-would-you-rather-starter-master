import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import { Component } from "react";
import AnsweredQTile from "./AnsweredQTile";

class AnsedQList extends Component {
  render() {
    return (
      <div className='App'>
        <ul>
          {this.props.AnsedQs.map((id) => {
            return (
              <li key={id}>
                <AnsweredQTile id={id} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps({ Questions, Users, authedUser }) {



  const AnsedQs = Object.keys(Users[authedUser].answers)

  return {
    QuestionsIds: AnsedQs.sort((a, b) => {
      return Questions[b].timestamp - Questions[a].timestamp;
    }),
    questions: Questions,
    users: Users,
    AnsedQs ,
  };
}

export default connect(mapStateToProps)(AnsedQList);
