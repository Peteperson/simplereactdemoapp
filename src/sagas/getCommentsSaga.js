import { take, put, call, apply } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { GET_COMMENT_LIST } from '../actions/actionTypes';
import { commentsRecieved } from '../actions/commentActions';

export function* getCommentsSaga() {
    while(true){
        yield take(GET_COMMENT_LIST);
        const response = yield call(fetch, `https://jsonplaceholder.typicode.com/comments`);
        const commentList = yield apply(response, response.json);
        yield put(commentsRecieved(commentList));
    }
}
