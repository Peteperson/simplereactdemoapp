import { makeActionCreator } from '../utility/makeActionCreator';
import {GET_USER_LIST, GET_USER_LIST_SUCCESS} from '../actions/actionTypes';

export const loadUsers = makeActionCreator(GET_USER_LIST);
export const usersRecieved = makeActionCreator(GET_USER_LIST_SUCCESS, 'userList');