import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorizedReducer(state = initialState.authorizedData, action) {
    switch (action.type) {
        case types.CALL_REST_SERVICE_SUCCESS:
            return action.responseData;
        default:
            return state;
    }
}