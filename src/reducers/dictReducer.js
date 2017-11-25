import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function dictReducer(state = initialState.dictionaries, action) {
    switch (action.type) {
        case types.GET_DICTIONARIES_STATUSES_SUCCESS:
            const statecopy= Object.assign({}, state);
            statecopy.statuses = action.statuses;
            return statecopy;
        default:
            return state;
    }
}
