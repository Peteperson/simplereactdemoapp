import { take, put, call, apply } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { AUTHENTICATE_BEGIN } from '../actions/actionTypes';
import { authRecieved } from '../actions/loginActions';

export function* loginSaga() {
    while (true) {
        const act = yield take(AUTHENTICATE_BEGIN);
        const requestParams = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            body: `grant_type=password&username=${act.credentials.username}&password=${act.credentials.password}&client_id=browserId`
        };
        const response = yield call(fetch, 'http://peteperson.dyndns-home.com/brcperfmonapi/token', requestParams);
        const authData = yield apply(response, response.json);
        if(authData.error)
            authData.authenticated = false;
        else
            authData.authenticated = true;
        yield put(authRecieved(authData));
    }
}
