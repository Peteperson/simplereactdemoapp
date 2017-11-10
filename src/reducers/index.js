import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import * as types from '../actions/actionTypes';
import users from './userReducer';
import comments from './commentReducer';
import schedules from './scheduleReducer';
import initialState from './initialState';
import ajaxCallsInProgress from './ajaxStatusReducer';
import authenticationData from './loginReducer';

const appReducer = combineReducers({
    courses,
    authors,
    users,
    comments,
    schedules,
    ajaxCallsInProgress,
    authenticationData
});

const rootReducer = (state, action) => {
    if (action.type === types.LOGOFF_BEGIN) {
        state = initialState
    }
    return appReducer(state, action)
}

export default rootReducer;
