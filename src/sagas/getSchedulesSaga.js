import { take, put, call, apply } from 'redux-saga/effects';
import { GET_SCHEDULE_LIST } from '../actions/actionTypes';
import { schedulesRecieved } from '../actions/scheduleActions';
import { authorizedRequest } from '../utility/restClient';

export function* getSchedulesSaga() {
    while (true) {
        yield take(GET_SCHEDULE_LIST);
        const schedsResponse = yield call(authorizedRequest, 'get', '/Schedules/AllSchedulesCut');
        const scheduleList = yield apply(schedsResponse, schedsResponse.json);
        yield put(schedulesRecieved(scheduleList));
    }
}
