import React, { Component } from "react";

// import "../App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { Link, Route, useParams } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Results from "./Answered/Results";
import QuestionCard from "./UnAnswered/QuestionCard";

class QDetails extends Component {
  componentDidMount() {
    // this.props.isQAnsed1()
    // console.log("when mounts ", this.isQAnsed());

    this.setState(() => ({
      isAnsed: this.isQAnsed(),
    }));
  }
  state = {
    isAnsed: false,
  };

  rerenderToResults = () => {
    const ansss = this.state.isAnsed;
    // this.props.isQAnsed1()
    //   console.log(' ppppppppppppppppppppppppppppppppp')

    ansss === false && this.setState({
      isAnsed: !ansss,
    });

    // this.isQAnsed()
  };

  setToQuestionsView = () => {
    this.setState(() => ({
      isAnsed: false,
    }));
  };

  getIdfromURL = () => {
    if (window.location.href.includes("question:")) {
      const length = window.location.href.length;
      const index = window.location.href.indexOf("n:");
      const ddid = window.location.href.substring(index + 2, length);
      return ddid;
    }
  };

  isQAnsed = (id) => {


    const is = Object.keys(this.props.authed.answers).includes(
      this.getIdfromURL()
    )
      ? true
      : false;

    console.log("..............", Object.keys(this.props.authed.answers) , this.getIdfromURL())


   is === true && this.rerenderToResults() 

    return is;
  };

  componentDidUpdate(){


  }

  componentWillUnmount() {
    // console.log('a question will be checked all over again')
  }

  componentWillMount() {
    // this.setState({ isAnsed: this.props.isQAnsed1() });
  }

  render() {
    return (
      <div>
        {/* {console.log("..............", this.state.isAnsed , this.isQAnsed())} */}
        {/* {this.isQAnsed(this.whatCompToShow())=== false && this.state.isAnsed === false ? ( */}

        {this.state.isAnsed === false ? (
          <QuestionCard
            id={this.getIdfromURL()}
            rerenderToResults={this.rerenderToResults}
          />
        ) : (
          <Results id={this.getIdfromURL()} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, Users }) {
  const authed = Users[authedUser];

  return {
    authed,

    authedUser,
  };
}

export default connect(mapStateToProps)(QDetails);
