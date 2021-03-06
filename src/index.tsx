import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers, RootState } from './app/store/store';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { ActionTypes } from './app/store/actionTypes';

// create redux store
// 1. paramter = reducers
// 2. parameter = store enhancers
//  - e.g. composeWithDevTools
//  - e.g. applyMiddleware
//      - applyMiddleware is a enhancer which enhances the store to include functions as middleware
//      - all function inside applyMiddleware-enhancer are middleware-function
export const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, ActionTypes>)),
);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App></App>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
