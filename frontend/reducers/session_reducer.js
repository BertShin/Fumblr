import {
  RECEIVE_USER
} from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = {
  currentUser: null,
  errors: []
};
// needs review
const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_USER:
      if (action.payload) {
        newState = merge({}, { currentUser: action.payload.username });
        console.log(action.payload);
        return newState;
      } else {
        newState = merge({}, { currentUser: action.payload });
        console.log(action.payload);
        return newState;
      }
    default:
      return state;
  }
};

export default SessionReducer;
