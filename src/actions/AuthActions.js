import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { EMAIL_CHANGED, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, PASSWORD_CHANGED } from './types';
import { navigate } from './NavActions';

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
};


export const goBack = () => NavigationActions.back();

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  dispatch(navigate('Main'));
};

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: LOGIN_USER });
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => { loginUserSuccess(dispatch, user); })
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => { loginUserSuccess(dispatch, user); })
        .catch(() => { loginUserFail(dispatch); });
    });
};
