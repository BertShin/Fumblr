import React from 'react';
import PostForm from './post_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost, clearErrors } from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.post,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPost: (post) => dispatch(createPost(post)),
  clearErrors: () => dispatch(clearErrors())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));
