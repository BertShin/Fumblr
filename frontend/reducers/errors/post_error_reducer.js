import {
  RECEIVE_POST,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from "../../actions/post_actions";


const clearErrors = [];

const PostErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.payload;
    case RECEIVE_POST:
      return clearErrors;
    case CLEAR_ERRORS:
      return clearErrors;
    default:
      return state;
  }
};


export default PostErrorReducer;
