import { combineReducers } from 'redux'
import authedUser from './AuthedUser'
import Questions from './Questions'
import Users from './Users'
// import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    authedUser,
    Users,
    Questions,
    // loadingBar: loadingBarReducer 
})