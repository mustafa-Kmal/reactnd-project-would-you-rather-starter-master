import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { Component } from "react";
import ListTile from "./ListTile";
// import { Route } from "react-router-dom";

class LeaderboardList extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <ul>
            {this.props.UsersIds.map((id) => {
              return (
                <li key={id}>
                  <ListTile id={id} />
                </li>
              );
            })}
          </ul>
        </header>
      </div>
    );
  }
}
function mapStateToProps({ Users }) {
  return {
    UsersIds: Object.keys(Users).sort((a, b) => {
      return (
        Object.keys(Users[b].answers).length +
        Users[b].questions.length -
        (Object.keys(Users[a].answers).length +
        Users[a].questions.length)
      );
    }),

    users: Users,
  };
}

export default connect(mapStateToProps)(LeaderboardList);
