import { combineReducers } from 'redux';
import auth from './AuthReducer';
import nav from './NavReducer';
import employeesForm from './EmployeeFormReducer';
import employees from './EmployeesReducer';

export default combineReducers({
  auth,
  nav,
  employeesForm,
  employees,
});
