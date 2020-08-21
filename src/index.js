import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingsReducer = (state = '', action) => {
    if (action.type === 'FEELINGS_SUBMIT') {
        return action.payload
    }
    return state
}

const understandingReducer = (state = '', action) => {
    if (action.type === 'UNDERSTANDING_SUBMIT') {
        return action.payload
    }
    return state
}

const reduxStore = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
