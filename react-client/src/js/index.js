import React from 'react';
import ReactDOM from 'react-dom';

import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {createEpicMiddleware} from 'redux-observable';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './stores/reducers';
import rootEpic from './stores/epics';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware, thunk)));
epicMiddleware.run(rootEpic);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
