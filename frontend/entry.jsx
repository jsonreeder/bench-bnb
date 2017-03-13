import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logIn, logOut, signUp } from './actions/session_actions';
// import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // TODO: Remove after development
  window.store = store;
  window.logIn = logIn;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
