// import logo from "../logo.svg";
// import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";
import FigureImage from "react-bootstrap/FigureImage";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import formatQuestion from "../../utils/api";
import { connect } from "react-redux";
import { Component } from "react";
// import { handleInitialData } from "../../actions/shared";
import AnsweredQTile from "./AnsweredQTile";
import { Route } from "react-router-dom";
import Results from "./Results";

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
    console.log("......................state is: ", this.state.Showing);
    return (
      <div>
        <Route
          path='/Dashboard/Home/Answered'
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
    QuestionsIds: AnsedQs,
    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
    questions: Questions,
    users: Users,
    toggleView,
    showingAnsweredState,
    handleId,
  };
}

export default connect(mapStateToProps)(AnsedQList);
