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
        // If the login was not successful 
        if (loggedInUser.status !== HttpStatus.OK) {
          // If there no CSRF token get a CSRF token
          if (loggedInUser.status === HttpStatus.FORBIDDEN) {
            dispatch(beginApiCall());
            return dispatch(loginGetCSRFTokenUser(username, password));
          }
          const error = new Error(loggedInUser.statusMessage);
          dispatch(apiCallError(error));
          return dispatch(loginError(error));
        }

        // If login was successful load user details
        // and send a success action to authReducer
        dispatch(userActions.loadUserDetails(username, csrfToken));
        return dispatch(loginSuccess(loggedInUser));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        return dispatch(loginError(error));
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
        if (signedUpUser.status == HttpStatus.FORBIDDEN) {
          dispatch(beginApiCall());
          return dispatch(loginGetCSRFTokenUser());
        } else if (signedUpUser.status !== HttpStatus.CREATED) {
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

export function loginGetCSRFTokenStart() {
  return { type: types.LOGIN_GETCSRF_TOKEN_START };
}

export function loginGetCSRFTokenSuccess(csrfTokenData) {
  return { type: types.LOGIN_GETCSRF_TOKEN_SUCCESS, csrfTokenData };
}

export function loginGetCSRFTokenError(csrfTokenError) {
  return { type: types.LOGIN_GETCSRF_TOKEN_ERROR, csrfTokenError };
}

export function loginGetCSRFTokenUser (username = null, password = null) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(loginGetCSRFTokenStart());
    
    return authApi.getCSRFToken()
      .then((csrfTokenData) => {
        if (csrfTokenData.status !== HttpStatus.OK) {
          const error = new Error(csrfTokenData.statusMessage);
          dispatch(apiCallError(error));
          return dispatch(loginGetCSRFTokenError(error));
        } else if (csrfTokenData.status === HttpStatus.OK) {
          if(username && password) {
            dispatch(loginGetCSRFTokenSuccess(csrfTokenData));
            return dispatch(loginUser(username, password, csrfTokenData.data.csrfToken));
          }
          return dispatch(loginGetCSRFTokenSuccess(csrfTokenData));
        }
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        dispatch(loginGetCSRFTokenError(error));
      });
    }
}
