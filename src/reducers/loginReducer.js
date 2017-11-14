import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { browserHistory } from 'react-router';
import authTokenHandler from '../utility/authTokenHandler';

export default function loginReducer(state = initialState.authenticationData, action) {
    switch (action.type) {
        case types.AUTHENTICATE_BEGIN:
            return { authenticated: -1 };
        case types.AUTH_TOKEN_EXPIRED:
            setTimeout(() => { browserHistory.push('/refreshtoken'); }, 100);
            return { authenticated: -2 };
        case types.AUTHENTICATE_END:
            if (action.authData.authenticated === 1)
                setTimeout(() => { browserHistory.push('/courses'); }, 100);
            return action.authData;
        case types.AUTH_REFRESH_END:
            if (action.authData.authenticated === 1)
                return action.authData;
            authTokenHandler.clearAuthTokens();
            browserHistory.push('/login');
        case types.LOGOFF_BEGIN:
            authTokenHandler.clearAuthTokens();
            return { authenticated: 0 };
        default:
            return state;
    }
}