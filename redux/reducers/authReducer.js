import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(
  state = {
    loggedIn: initialState.loggedIn,
    loggedInUser: initialState.loggedInUser,
    isFetching: initialState.isFetching,
    hasError: initialState.hasError,
    errorMessage: initialState.errorMessage,
    csrfToken: initialState.csrfToken
  },
  action
) {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        isFetching: true
      };

    case types.LOGIN_SUCCESS:
      const { data, headers } = action.loggedInUser;
      const csrfToken = headers['set-cookie'][0].split(';')[0].split('=')[1];
      
      return {
        ...state,
        isFetching: true,
        loggedIn: true,
        loggedInUser: data,
        csrfToken
      };
    
    case types.LOGIN_ERROR:
      const { loginError } = action;
      return {
        ...state,
        isFetching: false,
        loggedIn: false,
        hasError: true,
        loggedInUser: {},
        errorMessage: loginError
      };
    
    case types.LOGOUT_START:
      return {
        ...state,
        isFetching: true
      };
    
    case types.LOGOUT_SUCCESS:
      return {
        ...initialState
      };
    
    case types.LOGOUT_ERROR:
      error = action;
      return {
        ...state,
        isFetching: false,
        loggedIn: true,
        hasError: true,
        loggedInUser: null,
        errorMessage: error
      };
    
    default:
      return state;
  }
}