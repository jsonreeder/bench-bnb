import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';

// TODO: Why is `rootReducer` camel case while `SessionReducer` is proud camel?
const rootReducer = combineReducers({
  session: SessionReducer
});

export default rootReducer;
