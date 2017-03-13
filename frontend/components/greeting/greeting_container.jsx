import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import Greeting from './greeing.jsx';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
