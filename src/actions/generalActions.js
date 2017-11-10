import { makeActionCreator } from '../utility/makeActionCreator';
import { AUTH_TOKEN_EXPIRED } from '../actions/actionTypes';

export const tokenExpired = makeActionCreator(AUTH_TOKEN_EXPIRED);
