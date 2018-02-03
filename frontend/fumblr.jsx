import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchPosts, fetchPost, createPost, deletePost } from './actions/post_actions';


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
  // Dev Testing //
  window.store = store;
  window.fetchPosts = fetchPosts;
  window.fetchPost = fetchPost;
  window.createPost = createPost;
  window.deletePost = deletePost;
  ReactDOM.render(<Root store={store}/>, root);
});
