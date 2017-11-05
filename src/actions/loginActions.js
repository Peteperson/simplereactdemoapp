import { makeActionCreator } from '../utility/makeActionCreator';
import {
    AUTHENTICATE_BEGIN,
    AUTHENTICATE_END,
    LOGOFF_BEGIN
} from '../actions/actionTypes';

export const startAuth = makeActionCreator(AUTHENTICATE_BEGIN, 'credentials');
export const authRecieved = makeActionCreator(AUTHENTICATE_END, 'authData');
export const logoffAuth = makeActionCreator(LOGOFF_BEGIN);