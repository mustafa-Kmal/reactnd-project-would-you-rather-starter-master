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
        
        path='/Dashboard/Home/'
        render={() => {
          return (
            <div className='App'>
              <ul>
                {this.props.QuestionsIds.map((id) => {
                      // console.log(this.props.id)

                  return (
                    
                    <li key={id}>
                      <UnAnsweredQTile
                        id={id}
                        toggleView={this.props.toggleView}
                        
                        handleId={this.props.handleId}
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
  { UnAnsedQs, showingUnAnsweredState, toggleView, handleId }
) {
  return {
    QuestionsIds: UnAnsedQs.sort((a,b)=> { return Questions[b].timestamp - Questions[a].timestamp}),
    questions: Questions,
    users: Users,
    authedUser,
    showingUnAnsweredState,
    toggleView,
    handleId,
  };
}

export default connect(mapStateToProps)(UnAnsedQList);
