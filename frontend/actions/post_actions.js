import * as PostAPIUtil from "../util/post_api_util";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const DELETE_POST = "DELETE_POST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  payload: posts
});

const receivePost = (post) => ({
  type: RECEIVE_POST,
  payload: post
});

const destroyPost = (post) => ({
  type: DELETE_POST,
  payload: post.id
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  payload: errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchPosts = () => dispatch => (
  PostAPIUtil.fetchPosts().then((serverPosts) => dispatch(receivePosts(serverPosts)))
);

export const fetchPost = postId => dispatch => (
  PostAPIUtil.fetchPost(postId).then(serverPost => dispatch(receivePost(serverPost)))
);

export const createPost = post => dispatch => (
  PostAPIUtil.createPost(post).then(serverPost => (
    dispatch(receivePost(serverPost))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deletePost = postId => dispatch => (
  PostAPIUtil.deletePost(postId).then(serverPost => (
    dispatch(destroyPost(serverPost))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
