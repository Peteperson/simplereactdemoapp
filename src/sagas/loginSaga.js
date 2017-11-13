import { take, put, call, apply } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { AUTHENTICATE_BEGIN, AUTH_REFRESH_BEGIN } from '../actions/actionTypes';
import { authRecieved, authRefreshed } from '../actions/loginActions';
import authTokenHandler from '../utility/authTokenHandler';
import { restApiServer } from '../config';

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
        const response = yield call(fetch, restApiServer + '/token', requestParams);
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

export function* refreshTokenSaga() {
    while (true) {
        const act = yield take(AUTH_REFRESH_BEGIN);
        console.log('inside refresh saga');
        const requestParams = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            body: `grant_type=refresh_token&refresh_token==${authTokenHandler.getRefreshToken()}&client_id=browserId`
        };
        const response = yield call(fetch, restApiServer + '/token', requestParams);
        const authData = yield apply(response, response.json);
        console.log('authData' + authData);
        if (authData.error)
            authData.authenticated = 0;
        else {
            authData.authenticated = 1;
            authTokenHandler.storeTokens(authData.access_token, authData.refresh_token);
        }
        yield put(authRefreshed(authData));
    }
}
