import { render } from "@testing-library/react";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter,
  Route,
  Redirect,
 
} from "react-router-dom";

class PrivateRoute extends Component {
  render() {
    console.log(
      "33333333333333333333333333333333333333333",
      this.props.authedUser
    );
    return (
      <Route
        {...this.props.restOfProps}
        render={(props) => {
          return this.props.authedUserr ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/Login",
                state: { from: this.props.location },
              }}
            />
          );
        }}
      />
    );
  }
}

function mapStateToProps(
  { authedUser },
  { component: Component, isLogged, ...restOfProps }
) {

  // const authedUserr = 'tylermcginnis'
  // const authedUserr = ''

  return {
    authedUser,
    Component,
    isLogged,
    ...restOfProps,

  };
}

export default connect(mapStateToProps, null, null , {pure: false,} )(PrivateRoute);
