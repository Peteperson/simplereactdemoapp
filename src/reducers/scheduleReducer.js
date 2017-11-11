import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function scheduleReducer(state = initialState.schedules, action) {
    switch (action.type) {
        case types.CALL_REST_SERVICE_SUCCESS:
            return action.scheduleList;
        default:
            return state;
    }
}