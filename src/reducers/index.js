import { combineReducers } from 'redux';
import auth from './AuthReducer';
import nav from './NavReducer';

export default combineReducers({
  auth,
  nav,
});
