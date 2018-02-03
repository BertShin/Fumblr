import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  DELETE_POST
} from '../../actions/post_actions';
import merge from 'lodash/merge';

const PostReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_POSTS:
      newState = merge({}, state, action.payload);
      return newState;
    case RECEIVE_POST:
      newState = merge({}, state, action.payload);
      return newState;
    case DELETE_POST:
      newState = merge({}, state);
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
