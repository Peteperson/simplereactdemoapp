import { take, put, call } from 'redux-saga/effects';
import { CALL_REST_SERVICE } from '../actions/actionTypes';
import { dataRecieved } from '../actions/restServiceActions';
import { authorizedRequest } from '../utility/restClient';

export function* authorizedRequestSaga() {
    while (true) {
        const req = yield take(CALL_REST_SERVICE);
        const schedsList = yield call(authorizedRequest, req.requestInfo.type, req.requestInfo.api);
        yield put(dataRecieved(schedsList));
    }
}
