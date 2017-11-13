import { makeActionCreator } from '../utility/makeActionCreator';
import {
    AUTHENTICATE_BEGIN,
    AUTHENTICATE_END,
    LOGOFF_BEGIN,
    AUTH_REFRESH_BEGIN,
    AUTH_REFRESH_END
} from '../actions/actionTypes';

export const startAuth = makeActionCreator(AUTHENTICATE_BEGIN, 'credentials');
export const authRecieved = makeActionCreator(AUTHENTICATE_END, 'authData');
export const refreshAuth = makeActionCreator(AUTH_REFRESH_BEGIN, 'credentials');
export const authRefreshed = makeActionCreator(AUTH_REFRESH_END, 'authData');
export const logoffAuth = makeActionCreator(LOGOFF_BEGIN);