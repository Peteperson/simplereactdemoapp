import { take, put, call, apply } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { GET_SCHEDULE_LIST } from '../actions/actionTypes';
import { schedulesRecieved } from '../actions/scheduleActions';
import authTokenHandler from '../utility/authTokenHandler'

export function* getSchedulesSaga() {
    while (true) {
        yield take(GET_SCHEDULE_LIST);
        console.log('Fuck you: ' + authTokenHandler.getAuthToken());
        const requestParams = {
            headers: {
                Accept: 'application/json',
                'Authorization': `Bearer ${authTokenHandler.getAuthToken()}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'get'
        };
        const response = yield call(fetch, 'http://localhost/brcperfmonapi/api/Schedules/AllSchedulesCut', requestParams);
        const scheduleList = yield apply(response, response.json);
        yield put(schedulesRecieved(scheduleList));
    }
}
