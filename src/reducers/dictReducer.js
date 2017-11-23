import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function dictReducer(state = initialState.dictionaries, action) {
    switch (action.type) {
        case types.GET_DICTIONARIES_SUCCESS:
            return action.dictionary;
        default:
            return state;
    }
}
