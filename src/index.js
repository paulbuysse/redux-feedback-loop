import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//stores data about feelings
const feelingsReducer = (state = '', action) => {
    if (action.type === 'FEELINGS_SUBMIT') {
        return action.payload
    }
    return state
}

//stores data about understanding
const understandingReducer = (state = '', action) => {
    if (action.type === 'UNDERSTANDING_SUBMIT') {
        return action.payload
    }
    return state
}

//stores data about support
const supportReducer = (state = '', action) => {
    if (action.type === 'SUPPORT_SUBMIT') {
        return action.payload
    }
    return state
}

//stores user comments
const commentsReducer = (state = '', action) => {
    if (action.type === 'COMMENTS_SUBMIT') {
        return action.payload
    }
    return state
}

const reduxStore = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
