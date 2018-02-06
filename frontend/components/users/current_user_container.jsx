import React from 'react';
import { connect } from 'react-redux';
import UserPage from './current_user';


const mapStateToProps = (state, ownProps) => ({
  email: state.session.currentUser.email,
  username: state.session.currentUser.email,
  image_url: state.session.currentUser.image_url
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});



export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
