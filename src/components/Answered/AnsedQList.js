import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import { Component } from "react";
import AnsweredQTile from "./AnsweredQTile";
import { Route } from "react-router-dom";

class AnsedQList extends Component {
  state = {
    Showing: this.props.showingAnsweredState,
    // Showing: false,
  };

  handleToggleShowing = () => {
    this.setState((currState) => ({
      Showing: !currState.Showing,
    }));
  };

  render() {
    return (
      <div>
        <Route
          path='/Dashboard/Home/'
          render={() => {
            return (
              <div className='App'>
                <ul>
                  {this.props.QuestionsIds.map((id) => {
                    return (
                      <li key={id}>
                        <AnsweredQTile
                          toggleView={this.props.toggleView}
                          id={id}
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
      </div>
    );
  }
}
function mapStateToProps(
  { Questions, Users },
  { AnsedQs, toggleView, showingAnsweredState, handleId }
) {
  return {
    QuestionsIds: AnsedQs.sort((a,b)=> { return Questions[b].timestamp - Questions[a].timestamp}),
    questions: Questions,
    users: Users,
    toggleView,
    showingAnsweredState,
    handleId,
  };
}

export default connect(mapStateToProps)(AnsedQList);
