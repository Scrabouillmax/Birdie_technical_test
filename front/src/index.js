import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';
import './index.css';
import App from './components/App/App.container';

const store = createStore(
    reducer,
    // middleware handling asynchronous action creators
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);