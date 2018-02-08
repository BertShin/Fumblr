import React from 'react';
import FeedIndex from './feed_index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts, fetchPost, deletePost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => ({
  posts: Object.values(state.entities.posts),
  currentUser: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchPost: (id) => dispatch(fetchPost(id)),
  deletePost: (id) => dispatch(deletePost(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedIndex));
