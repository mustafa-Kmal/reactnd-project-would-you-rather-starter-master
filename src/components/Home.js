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

class Home extends Component {
  render() {
    return (
      <div className='App'>
        {/* <header className='App-header'> */}
        <header>
          <Tabs
            defaultActiveKey='Answered Questions'
            id='uncontrolled-tab-example'
            className='mb-3 second-tab'>
            <Tab
              eventKey='Answered Questions'
              title='Answered Questions'
              className='link'>
              <AnsedQList AnsedQs={this.props.AnsedQs}/>
            </Tab>
            <Tab
              eventKey='Unanswered Questions'
              title='Unanswered Questions'
              className='link'>

              <UnAnsedQList UnAnsedQs={this.props.UnAnsedQs}/>
            </Tab>
          </Tabs>

          <br />
        </header>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, Questions, Users }) {
  const AnsedQs = []
  const UnAnsedQs = [];
  Object.entries(Questions).map((q) => {
    // console.log(q[1])
    const op1 = q[1].optionOne.votes;
    const op2 = q[1].optionTwo.votes;
    if (!op1.includes(authedUser) && !op2.includes(authedUser)) {
      UnAnsedQs.push(q[1].id);
    }
    else {
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
