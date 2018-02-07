import React from 'react';
import { connect } from 'react-redux';
import UserPage from './user_page';
import { getPosts } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
  email: state.session.currentUser.email,
  username: state.session.currentUser.username,
  image_url: state.session.currentUser.image_url,
  posts: getPosts(state.entities.posts, state.session.currentUser.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});



export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
