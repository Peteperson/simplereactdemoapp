/* eslint-disable import/default */
import registerServiceWorker from './registerServiceWorker';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.js';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
   <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
   </Provider>, document.getElementById('root')
);
registerServiceWorker();
