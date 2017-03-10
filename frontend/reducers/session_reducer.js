import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {

  case RECEIVE_CURRENT_USER:
    return {
      currentUser: action.user,
      errors: []
    };

  case RECEIVE_ERRORS:
    const errors = {errors: action.errors};
    const newErrors = Object.assign({}, state, errors);

    return {
      currentUser: null,
      errors: newErrors
    };

  default:
    return state;
  }
};

export default SessionReducer;
