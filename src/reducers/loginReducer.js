import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.authenticationData, action) {
    switch (action.type) {
        case types.AUTHENTICATE_BEGIN:
            return { authenticated: null };
        case types.AUTHENTICATE_END:
            return action.authData;
        case types.LOGOFF_BEGIN:
            return { authenticated: false };
        default:
            return state;
    }
}