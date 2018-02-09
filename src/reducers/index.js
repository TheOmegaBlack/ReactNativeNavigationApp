import { combineReducers } from 'redux';
import auth from './AuthReducer';
import nav from './NavReducer';
import employees from './EmployeeFormReducer';

export default combineReducers({
  auth,
  nav,
  employees,
});
