import { take, put, call } from 'redux-saga/effects';
import { CALL_REST_SERVICE } from '../actions/actionTypes';
import { dataRecieved } from '../actions/restServiceActions';
import { authorizedRequest } from '../utility/restClient';
import { loadDictionaries } from '../actions/dictActions';

export function* authorizedRequestSaga() {
   while (true) {
      const req = yield take(CALL_REST_SERVICE);
      const response = yield call(authorizedRequest, req.requestInfo.type, req.requestInfo.api);
      if(response)
         yield put(loadDictionaries({ name: 'statuses', type: 'get', api: '/api/Views/ScheduleStatus' }));
      yield put(dataRecieved(response));
   }
}
