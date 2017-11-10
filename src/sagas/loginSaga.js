import { take, put, call, apply } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { AUTHENTICATE_BEGIN } from '../actions/actionTypes';
import { authRecieved } from '../actions/loginActions';
import authTokenHandler from '../utility/authTokenHandler';

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
        const response = yield call(fetch, 'http://10.211.108.141/brcperfmonapi/token', requestParams);
        const authData = yield apply(response, response.json);
        if(authData.error)
            authData.authenticated = 0;
        else{
            authData.authenticated = 1;
            authTokenHandler.storeTokens(authData.access_token, authData.refresh_token);
        }
        yield put(authRecieved(authData));
    }
}
