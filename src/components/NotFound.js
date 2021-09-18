import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link , Redirect} from "react-router-dom";
import {  Route } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <Route path='*'>
        <div>
          <h1>Oops!!</h1>
          <h2>404 Not Found</h2>
          <div>Sorry, an error has occured, Requested page not found!</div>
          <Button variant='secondary' size='md'>
            <Redirect className='link' to={`/`}>
              Take me to the home page
            </Redirect>
          </Button>
        </div>
      </Route>
    );
  }
}

export default NotFound;
