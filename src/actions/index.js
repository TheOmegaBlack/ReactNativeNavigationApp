import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import RootStack from '../Router';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
  console.log('dafaq');
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: LOGIN_USER });
  const ActionForLogIn = RootStack.router.getActionForPathAndParams('EmployeeList');
  const stateForLogIn = RootStack.router.getStateForAction(ActionForLogIn);
  dispatch(stateForLogIn);
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => { loginUserSuccess(dispatch, user); })
    .catch((error) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => { loginUserSuccess(dispatch, user); })
        .catch(() => { loginUserFail(dispatch); });
    });
};
