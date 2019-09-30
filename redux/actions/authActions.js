import * as types from '../actions/actionTypes';
import * as authApi from '../../api/authApi';
import * as userApi from '../../api/userApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';
import * as userActions from '../actions/userActions';

export function loginStart() {
  return { type: types.LOGIN_START };
}

export function loginSuccess(loggedInUser) {
  return { type: types.LOGIN_SUCCESS, loggedInUser };
}

export function loginError(loginError) {
  return { type: types.LOGIN_ERROR, loginError };
}

export function loginUser (username, password, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(loginStart());
    
    return authApi.login(username, password, csrfToken)
      .then((loggedInUser) => {
        if (loggedInUser.status !== HttpStatus.OK) {
          const error = new Error(loggedInUser.statusMessage);
          dispatch(apiCallError(error));
          dispatch(loginError(error));
        }
        dispatch(userActions.loadUserDetails(csrfToken));
        return dispatch(loginSuccess(loggedInUser));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        dispatch(loginError(error));
      });
    }
}

export function logoutStart() {
  return { type: types.LOGOUT_START };
}

export function logoutSuccess(loggedInUser) {
  return { type: types.LOGOUT_SUCCESS, loggedInUser };
}

export function logoutError(logoutError) {
  return { type: types.LOGOUT_ERROR, logoutError };
}

export function logoutUser (username, password) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(logoutStart());
    
    return authApi.logout(username, password)
      .then((logoutResponse) => {
        if (logoutResponse.status !== HttpStatus.OK) {
          throw new Error(logoutResponse.statusMessage);
        }
        return dispatch(logoutSuccess());
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        dispatch(logoutError(error));
        throw error;
      });
    }
}


export function signupStart() {
  return { type: types.SIGNUP_START };
}

export function signupSuccess(signedUpUser) {
  return { type: types.SIGNUP_SUCCESS, signedUpUser };
}

export function signupError(signupError) {
  return { type: types.SIGNUP_ERROR, signupError };
}

export function signupUser (signupData, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(signupStart());
    
    return userApi.signup(signupData, csrfToken)
      .then((signedUpUser) => {
        if (signedUpUser.status !== HttpStatus.CREATED) {
          const error = new Error(signedUpUser.statusMessage);
          dispatch(apiCallError(error));
          dispatch(signupError(error));
        }
        return dispatch(signupSuccess(signedUpUser));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        dispatch(signupError(error));
      });
    }
}