import * as types from '../actions/actionTypes';
import initialState from './initialState';
import authTokenHandler from '../utility/authTokenHandler';

export default function loginReducer(state = initialState.authenticationData, action) {
    switch (action.type) {
        case types.AUTHENTICATE_BEGIN:
            return { authenticated: -1 };
        case types.AUTHENTICATE_END:
            return action.authData;
        case types.LOGOFF_BEGIN:
            authTokenHandler.clearAuthToken();
            return { authenticated: 0 };
        default:
            return state;
    }
}