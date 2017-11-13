import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorizedReducer(state = initialState.authorizedData, action) {
    switch (action.type) {
        case types.CALL_REST_SERVICE_SUCCESS:
            if (action.responseData instanceof Array)
                return {listOfObjects: action.responseData, singleObject: {}};
            else
                return { listOfObjects: [], singleObject: action.responseData };
        default:
            return state;
    }
}