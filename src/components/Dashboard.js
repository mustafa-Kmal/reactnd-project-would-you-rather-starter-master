// import React, { Component } from "react";
// import NewQuestionCard from "./NewQuestionCard";
// import LeaderboardList from "./Leaderboard/LeaderboardList";
// import Home from "./Home";
// import Tabs from "react-bootstrap/Tabs";
// import Tab from "react-bootstrap/Tab";
// // import { Route } from "react-router-dom";
// import { Link, Redirect, useHistory, withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import { handleInitialDataUser } from "../actions/shared";

// class Dashboard extends Component {
//   state = {
//     activeKey: "Home",
//     HomeActiveKey: "Unanswered Questions",
//   };

//   handleResetHome = (key) => {
//     this.handleactiveKey(key);
//   };

//   handleHomeActiveKey = (key) => {
//     this.setState((prev) => {
//       return {
//         ...prev,
//         HomeActiveKey: (prev.HomeActiveKey = key),
//       };
//     });
//   };

//   handleactiveKey = (key) => {
//     this.setState(() => ({
//       activeKey: key,
//     }));
//   };

//   handleLogout = () => {
//     this.props.dispatch(handleInitialDataUser(null));
//   };

//   render() {
//     return (
//       <div className='App App-header'>

//         <Tabs
//           activeKey={this.state.activeKey}
//           defaultActiveKey='Home'
//           id='uncontrolled-tab-example'
//           className='mb-3 tab'>
//           <Tab
//             eventKey='Home'
//             title={
//               <Link
//                 className='link'
//                 to={{
//                   pathname: "/questions",
//                 }}
//                 onClick={() => {
                
//                   this.handleResetHome("Home");
//                 }}>
//                 Home
//               </Link>
//             }>
//            {this.state.activeKey === "Home" ?  <Home
//               HomeActiveKey={this.state.HomeActiveKey}
//             />: 
//             null
//             }
//           </Tab>

//           <Tab
//             eventKey='New Question'
//             title={
//               <Link
//                 className='link'
//                 // to='/add'
//                 to={{
//                   pathname: "/add",
//                   // state: { activeKey: "New Question" },
//                 }}
//                 onClick={() => {
//                   this.handleactiveKey("New Question");
              
//                 }}>
//                 New Question
//               </Link>
//             }>
//             <NewQuestionCard
//               toggleTabView={this.handleactiveKey}
//               HomeActiveKey={this.handleHomeActiveKey}
//             />
//           </Tab>

//           <Tab
//             eventKey='leaderboard'
//             title={
//               <Link
//                 className='link'
//                 to='/leaderboard'
//                 onClick={() => {
//                   this.handleactiveKey("leaderboard");
//                 }}>
//                 Leader Board
//               </Link>
//             }>
//             <LeaderboardList />
//           </Tab>

//           <Tab
//             eventKey='user'
//             title={`Signed in as: ${this.props.name}`}
//             disabled></Tab>

//           <Tab
//             eventKey='logout'
//             title={
//               <Link className='link' to='/Login' onClick={this.handleLogout}>
//                 Log out
//               </Link>
//             }></Tab>
//         </Tabs>
//       </div>
//     );
//   }
// }

// function mapStateToProps({ Questions, authedUser, Users }) {
//   const name = Users[authedUser].name;
//   return {
//     QuestionsIds: Object.keys(Questions),
//     name,
//   };
// }

// export default  withRouter(connect(mapStateToProps)(Dashboard));
