import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/index';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
