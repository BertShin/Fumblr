import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let formType;
  if (ownProps.match.path === '/signup') {
    formType = 'SignUp';
  } else {
    formType = "Login";
  }
  return {
    loggedIn: Boolean(state.session.currentUser),
    formType: formType,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
