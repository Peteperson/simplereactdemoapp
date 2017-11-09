import { makeActionCreator } from '../utility/makeActionCreator';
import { GET_SCHEDULE_LIST, GET_SCHEDULE_LIST_SUCCESS } from '../actions/actionTypes';

export const loadSchedules = makeActionCreator(GET_SCHEDULE_LIST);
export const schedulesRecieved = makeActionCreator(GET_SCHEDULE_LIST_SUCCESS, 'scheduleList');