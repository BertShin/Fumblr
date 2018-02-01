import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
// export const LOGOUT_USER = 'LOGOUT_USER';


const receiveCurrentUser = currentUser => ({
  type: RECEIVE_USER,
  payload: currentUser
});
// must review
// const logoutUser = () => ({
//   type: LOGOUT_USER,
//   payload: null
// });

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  payload: errors
});

const clearErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  payload: errors
});

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(serverUser => (
    dispatch(receiveCurrentUser(serverUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(serverUser => (
    dispatch(receiveCurrentUser(serverUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(serverUser => dispatch(receiveCurrentUser(null)))
);

export const clearAllErrors = () => dispatch => (
  () => dispatch(clearErrors(null))
);
