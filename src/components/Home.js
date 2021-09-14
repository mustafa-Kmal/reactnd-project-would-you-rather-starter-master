import logo from "../logo.svg";
import "../App.css";
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
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import QuestionCard from "./QuestionCard";
import AnsweredQTile from "./Answered/AnsweredQTile";
import AnsedQList from "./Answered/AnsedQList";
import UnAnsedQList from "./UnAnswered/UnAnsedQList";

import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { render } from "@testing-library/react";
import { connect } from "react-redux";
import { Component } from "react";
import Results from "./Answered/Results";


class Home extends Component {
  state = {
    ShowingAnswered: true,
    ShowingAnsweredId: '',
  };

  handleToggleShowing = () => {
    const toggle = this.state.ShowingAnswered
    this.setState((currState) => ({
      ShowingAnswered: !toggle,
    }));
  };


  handleId = (id) => {
    this.setState((currState) => ({
      ShowingAnsweredId: id,
    }));
  };
  render() {

    return (
      <Route
        path='/Dashboard/Home'
        render={() => {
          return (
            <div className='App second-tab'>
              <Tabs
                defaultActiveKey='Answered Questions'
                id='uncontrolled-tab-example'
                className='mb-3 second-tab'>
                <Tab
                  eventKey='Answered Questions'
                  title={
                    <Link className='link' to='/Dashboard/Home/Answered'>
                      Answered Questions
                    </Link>
                  }
                  onClick={this.handleToggleShowing}
                  className='link'>
                  {this.state.ShowingAnswered === true ? 
                  <AnsedQList
                  AnsedQs={this.props.AnsedQs}
                  showingAnsweredState={this.state.ShowingAnswered}
                  toggleView={this.handleToggleShowing}
                  handleId={this.handleId}
                />: <Results  id={this.state.ShowingAnsweredId} />
                }
                </Tab>
                <Tab
                  eventKey='Unanswered Questions'
                  title={
                    <Link className='link' to='/Dashboard/Home/Unanswered'>
                      Unanswered Questions
                    </Link>
                  }
                  className='link'>
                  <UnAnsedQList UnAnsedQs={this.props.UnAnsedQs} />
                </Tab>
              </Tabs>
            </div>
          );
        }}
      />
    );
  }
}

function mapStateToProps({ authedUser, Questions, Users }) {
  const AnsedQs = [];
  const UnAnsedQs = [];
  Object.entries(Questions).map((q) => {
    // console.log(q[1])
    const op1 = q[1].optionOne.votes;
    const op2 = q[1].optionTwo.votes;
    if (!op1.includes(authedUser) && !op2.includes(authedUser)) {
      UnAnsedQs.push(q[1].id);
    } else {
      AnsedQs.push(q[1].id);
    }
  });

  return {
    QuestionsIds: Object.keys(Questions),
    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
    questions: Questions,
    users: Users,
    authedUser,
    AnsedQs: AnsedQs,
    UnAnsedQs: UnAnsedQs,
  };
}

export default connect(mapStateToProps)(Home);
