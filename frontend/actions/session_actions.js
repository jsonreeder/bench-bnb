import * as APIUtil from '../util/session_api_util';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// Async
export const logIn = user => dispatch => {
  return APIUtil.logIn(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  ).fail(
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

// TODO: Consider adding success callback to promise
export const logOut = () => dispatch => {
  return logOut();
};

export const signUp = user => dispatch => {
  return APIUtil.signUp(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  ).fail(
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

// Sync
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
