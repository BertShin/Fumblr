import React from 'react';
import { connect } from 'react-redux';
import UserPage from './user_page';
import { getPosts } from '../../reducers/selectors';
import { deletePost } from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser.id,
  email: state.session.currentUser.email,
  username: state.session.currentUser.username,
  image_url: state.session.currentUser.image_url,
  posts: getPosts(state.entities.posts, state.session.currentUser.id),
  closeModal: ownProps.closeModal
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deletePost: (id) => dispatch(deletePost(id))

});



export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
