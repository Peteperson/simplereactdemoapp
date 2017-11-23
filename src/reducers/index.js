import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import dictionaries from './dictReducer';
import * as types from '../actions/actionTypes';
import users from './userReducer';
import comments from './commentReducer';
import authorizedData from './authorizedReducer';
import initialState from './initialState';
import ajaxCallsInProgress from './ajaxStatusReducer';
import authenticationData from './loginReducer';

const appReducer = combineReducers({
    courses,
    authors,
    users,
    comments,
    dictionaries,
    authorizedData,
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
