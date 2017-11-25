import { makeActionCreator } from '../utility/makeActionCreator';
import { GET_DICTIONARIES, GET_DICTIONARIES_SUCCESS } from '../actions/actionTypes';

export const loadDictionaries = makeActionCreator(GET_DICTIONARIES, 'requestInfo');
export const dictionariesRecieved = makeActionCreator(GET_DICTIONARIES_SUCCESS, 'dictionary');