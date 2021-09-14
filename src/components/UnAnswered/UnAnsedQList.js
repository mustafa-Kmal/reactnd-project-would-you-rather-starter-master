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
import UnAnsweredQTile from "./UnAnsweredQTile";
import { Route } from "react-router-dom";


class UnAnsedQList extends Component {
  render() {
    return (
      <Route
      exact
        path='/Dashboard/Home/Unanswered'
        render={() => {
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
        }}
      />
    );
  }
}
function mapStateToProps({ authedUser, Questions, Users }, { UnAnsedQs }) {
  return {
    QuestionsIds: UnAnsedQs,
    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
    questions: Questions,
    users: Users,
    authedUser,
  };
}

export default connect(mapStateToProps)(UnAnsedQList);
