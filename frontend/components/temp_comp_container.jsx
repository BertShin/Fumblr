import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Temporary from './temp_comp';


const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser.username
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => (dispatch(logout()))
});


export default connect(mapStateToProps, mapDispatchToProps)(Temporary);
