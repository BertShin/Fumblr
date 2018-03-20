import { RECEIVE_USER } from '../../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_USER:
      newState = merge({}, { currentUser: action.payload });
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
