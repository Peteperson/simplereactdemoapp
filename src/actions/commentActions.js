import { makeActionCreator } from '../utility/makeActionCreator';
import { GET_COMMENT_LIST, GET_COMMENT_LIST_SUCCESS } from '../actions/actionTypes';

export const loadComments = makeActionCreator(GET_COMMENT_LIST);
export const commentsRecieved = makeActionCreator(GET_COMMENT_LIST_SUCCESS, 'commentList');