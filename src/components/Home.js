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
import AnsweredQ from "./AnsweredQ";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

function Home() {
  return (
    <div className='App'>
      {/* <header className='App-header'> */}
      <header>
        <Tabs
          defaultActiveKey='profile'
          id='uncontrolled-tab-example'
          className='mb-3 second-tab'>
          <Tab
            eventKey='home'
            title='Answered Questions'
            className='link'>
            <AnsweredQ />
          </Tab>
          <Tab
            eventKey='profile'
            title='Unanswered Questions'
            className='link'>
            <QuestionCard />
          </Tab>
        </Tabs>

        <br />
      </header>
    </div>
  );
}

export default Home;
