import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import { Component } from "react";
import AnsweredQTile from "./AnsweredQTile";
import { Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";

class AnsedQList extends Component {
  // componentWillUnmount(){}
  // componentDidMount() {
  //   // console.log('a question will be checked all over again')
  //   this.updateList();
  // }

  // componentDidUpdate(prevProps) {
  //   if ((this.props.AnsedQs !== prevProps.AnsedQs)) {
  //     this.setState(() => ({
  //       ansd: this.props.AnsedQs,
  //     }));
  //   }
  // }

  // state = {
  //   ansd: [],
  // };

  // updateList = () => {
  //   this.setState(() => ({
  //     ansd: this.props.AnsedQs,
  //   }));
  // };



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
  // { handleId, handleactiveKey }
) {
  const AnsedQs =  Object.keys(Users[authedUser].answers)


  // Object.keys(Users[authedUser].answers).map((id)=> AnsedQs.push(id) )


  console.log(AnsedQs)

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
