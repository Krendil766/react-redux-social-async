import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';


import './index.css';
import Navigator from './navigation';
import reducer from './reducers';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(
  reducer,
  enhancer
);
//const store = createStore(reducer, applyMiddleware(thunk, reduxLogger));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Navigator />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

