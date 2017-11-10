import { put, call } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { tokenExpired } from '../actions/generalActions';
import authTokenHandler from '../utility/authTokenHandler';
import {restApiServer} from '../config';

export function authorizedRequest(method, url) {
    const header = {
        Accept: '*',
        'Authorization': `Bearer ${authTokenHandler.getAuthToken()}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
    };    
    return baseRequest(method, restApiServer + url, header, true);
}

function* baseRequest(method, url, header, authorized) {
    const requestParams = {
        headers: header,
        method
    };

    const response = yield call(fetch, url, requestParams);
    console.log(`ok:${response.ok}, status: ${response.status}`);
    if (response.ok) {
        return response;
    } else if (authorized && response.status === 401) {
        // Unauthorized
        yield put(tokenExpired());
        throw new Error("Unauthorized access");
    }
    throw new Error(`Error in request: ${url}`);
}