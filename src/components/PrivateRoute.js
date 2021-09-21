// import { render } from "@testing-library/react";
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { BrowserRouter, Route, Redirect, withRouter } from "react-router-dom";

// class PrivateRoute extends Component {
//   render() {
  
//     this.props.history.push(`${this.props.comingFrom}`, {
//       pathname: this.props.comingFrom,
//     });

//     // console.log(
//     //   "33333333333333333333333333333333333333333",
//     //   this.props.authedUser,
//     //   this.props.location.pathname,
//     //   this.props.comingFrom,
//     //   // this.props.history,
//     //   this.props.history.push(`${this.props.comingFrom}`, {
//     //     pathname: this.props.comingFrom,
//     //   }),
//     //   this.props.history,
//     //   "from",
//     //   this.props.restOfProps,
//     //   " this.props.history,",
//     //   this.props
//     // );

//     return (
//       <Route
//         {...this.props}
//         render={(props) => {
//           return this.props.authedUser ? (
//             <Component {...props} />
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/Login",
//                 state: { from: props.location.pathname },
//               }}>
//             </Redirect>
//           );
//         }}
//       />
//     );
//   }
// }

// function mapStateToProps(
//   { authedUser },
//   { component: Component, ...restOfProps }
// ) {
//   // const authedUserr = 'tylermcginnis'
//   // const authedUserr = ''
//   const comingFrom = restOfProps.location.pathname;
//   const f2 = restOfProps.history;

//   const f3 =
//     restOfProps.history.location.state !== "undefined"
//       ? restOfProps.history.location.state
//       : restOfProps.history.location.state.from;

//   // console.log('from',restOfProps)

//   return {
//     authedUser,
//     Component,
//     location: restOfProps.location,
//     comingFrom,
//     ...restOfProps,
//   };
// }

// export default withRouter(connect(mapStateToProps)(PrivateRoute));

