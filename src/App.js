import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import QuestionCard from "./components/QuestionCard";
import NewQuestionCard from "./components/NewQuestionCard";
import Results from "./components/Results";
import ListTile from "./components/ListTile";
import Home from "./components/Home";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "./components/Login";
import Avatar from "react-avatar";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='App App-header'>
      {/* <header className='App-header'> */}

      <Route exact path='/' render={() => <Login />} />

      <Tabs
        fixed='top'
        defaultActiveKey='profile'
        id='uncontrolled-tab-example'
        className='mb-3 tab'>
        <Tab
          eventKey='home'
          title={
            <Link className='link' to='/Home'>
              Home
            </Link>
          }>
          <Route exact path='/Home' render={() => <Home />} />
        </Tab>

        <Tab
          eventKey='profile'
          title={
            <Link className='link' to='/NewQuestionCard'>
              New Question
            </Link>
          }>
          <Route
            exact
            path='/NewQuestionCard'
            render={() => <NewQuestionCard />}
          />
        </Tab>

        <Tab
          eventKey='contact'
          title={
            <Link className='link' to='/Leader-Board'>
              Leader Board
            </Link>
          }>
          <Route exact path='/Leader-Board' render={() => <ListTile />} />
        </Tab>
        <Tab eventKey='contact' title={`Signed in as: user`} disabled>
          {/* <ListTile /> */}
        </Tab>
      </Tabs>

      {/* <Route exact path='/User' render={() => {
       
      }} /> */}
    </div>
  );
}

export default App;
