import { take, put, call, select } from 'redux-saga/effects';
import { GET_DICTIONARIES } from '../actions/actionTypes';
import { dictionariesRecieved } from '../actions/dictActions';
import { authorizedRequest } from '../utility/restClient';
import * as selectors from '../selectors';

export function* dictionariesSaga() {
    while (true) {
        const req = yield take(GET_DICTIONARIES);
        const dicts = yield select(selectors.getDictionaries);
        const current = dicts[req.requestInfo.name];
        let list = [];
        if (current && current.length > 0)
            list = current;
        else {
            const dictList = yield call(authorizedRequest, req.requestInfo.type, req.requestInfo.api);
            list = dictList;
        }
        yield put(dictionariesRecieved({ dictName: req.requestInfo.name, dictList: list }));
    }
}
