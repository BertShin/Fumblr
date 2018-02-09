import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';
import { fetchGame } from "./util/score_util";
import { fetchGameData } from "./actions/score_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  Modal.setAppElement(root);
  // Dev Testing //
  window.store = store;
  window.fetchGame = fetchGame;
  ReactDOM.render(<Root store={store}/>, root);
});
