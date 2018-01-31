import {
  RECEIVE_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';

const clearErrors = {
  errors: []
};

const ErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ERRORS:
      newState = merge({}, state, action.payload.errors);
      return newState;
    case RECEIVE_USER:
      newState = merge({}, clearErrors);
      return newState;
    default:
      return state;
  }
};

export default ErrorsReducer;
