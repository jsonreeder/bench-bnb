import React from 'react';
import { connect } from 'react-redux';
import { logIn, logOut, signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const pF = (formType === 'login') ? logIn : signUp;
  console.log(pF, "is pF");

  return {
    logIn: user => dispatch(logIn(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
