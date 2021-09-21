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
 

  const AnsedQs = Object.keys(Users[authedUser].answers)

  const UnAnsedQs = Object.keys(Questions).filter( function( el ) {
    return AnsedQs.indexOf( el ) < 0;
  } );


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
