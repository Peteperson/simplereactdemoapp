import { take, put, call, apply } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { GET_SCHEDULE_LIST } from '../actions/actionTypes';
import { schedulesRecieved } from '../actions/scheduleActions';
import { tokenExpired } from '../actions/generalActions';
import authTokenHandler from '../utility/authTokenHandler'

export function* getSchedulesSaga() {
    while (true) {
        yield take(GET_SCHEDULE_LIST);
        const requestParams = {
            headers: {
                Accept: '*',
                'Authorization': `Bearer ${authTokenHandler.getAuthToken()}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            },
            method: 'get'
        };
        const response = yield call(fetch, 'http://localhost/brcperfmonapi/api/Schedules/AllSchedulesCut', requestParams);
        console.log(`ok:${response.ok}, status: ${response.status}`);
        if (response.status===401){
            yield put(tokenExpired());
        }else{
            const scheduleList = yield apply(response, response.json);
            yield put(schedulesRecieved(scheduleList));
        }
    }
}
