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
import { handleInitialData } from "../../actions/shared";
import ListTile from "./ListTile";

class LeaderboardList extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    // console.log(this.props.questions);
    return (
      <div className='App'>
        <header className='App-header'>
        
          <ul>
            {this.props.UsersIds.map((id) => {
              return (
                <li key={id}>
                 
                  
                  <ListTile id={id}/>
                </li>
              );
            })}
          </ul>
        </header>
      </div>
    );
  }
}
function mapStateToProps({  Users }) {
  return {
    UsersIds: Object.keys(Users),
    // .sort((a,b)=> { questions[b].timestamp - questions[a].timestamp})
    
    users: Users,
  };
}

export default connect(mapStateToProps)(LeaderboardList);
