import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {initSagas} from '../initSagas';

export default function configureStore(initialState) {
  const sagaMidleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMidleware, thunk, reduxImmutableStateInvariant())
  );
  initSagas(sagaMidleware);
  return store;
}
