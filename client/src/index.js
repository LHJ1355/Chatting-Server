import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import promiseMiddleware from 'redux-promise';
import reduxThunk from 'redux-thunk';
import Reducer from './_reducers'

const createStoreWithMiddleware = applyMiddleware( promiseMiddleware, reduxThunk )(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware( 
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__() 
    )}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
