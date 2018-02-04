import React from 'react';
import PostForm from './post_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPost: (post) => dispatch(createPost(post))
});
