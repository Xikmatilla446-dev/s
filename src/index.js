import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer  from './store/rootReducer';

import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from  'react-redux'

import * as serviceWorker from './serviceWorker';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger, thunk)
    )
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));


serviceWorker.unregister();
