import { makeActionCreator } from '../utility/makeActionCreator';
import { CALL_REST_SERVICE, CALL_REST_SERVICE_SUCCESS } from '../actions/actionTypes';

export const callRequest = makeActionCreator(CALL_REST_SERVICE, 'requestInfo');
export const dataRecieved = makeActionCreator(CALL_REST_SERVICE_SUCCESS, 'responseData');