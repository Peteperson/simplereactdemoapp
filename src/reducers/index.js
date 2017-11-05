import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import users from './userReducer';
import comments from './commentReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import authenticationData from './loginReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    users,
    comments,
    ajaxCallsInProgress,
    authenticationData
});

export default rootReducer;
