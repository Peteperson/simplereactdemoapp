import {take, put, call, apply} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {GET_USER_LIST} from '../actions/actionTypes';
import {usersRecieved} from '../actions/userActions';

export function* getUsersSaga(){
  while (true) {
    yield take(GET_USER_LIST);
    const response = yield call(fetch, `https://jsonplaceholder.typicode.com/users`);
    const userList = yield apply(response, response.json);
    yield put(usersRecieved(userList));
  }
}
