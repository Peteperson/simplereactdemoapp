import { take, put, call } from 'redux-saga/effects';
import { GET_DICTIONARIES } from '../actions/actionTypes';
import { dictionariesRecieved } from '../actions/dictActions';
import { authorizedRequest } from '../utility/restClient';

export function* dictionariesSaga() {
    while (true) {
        const req = yield take(GET_DICTIONARIES);
        const dictList = yield call(authorizedRequest, req.requestInfo.type, req.requestInfo.api);
        yield put(dictionariesRecieved(dictList));
    }
}
