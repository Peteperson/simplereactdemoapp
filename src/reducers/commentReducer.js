import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function commentReducer(state = initialState.comments, action) {
    switch (action.type) {
        case types.GET_COMMENT_LIST_SUCCESS:
            return action.commentList;
        default:
            return state;
    }
}