import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(
  state = {
    loggedIn: initialState.loggedIn,
    loggedInUser: initialState.loggedInUser,
    signedUpUser: initialState.signedUpUser,
    isFetching: initialState.isFetching,
    isUpdatingFOrLName: initialState.isUpdatingFOrLName,
    hasError: initialState.hasError,
    errorMessage: initialState.errorMessage,
    csrfToken: initialState.csrfToken,
    userDetails: initialState.userDetails
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
      let csrfToken = headers['set-cookie'][0].split(';')[0].split('=')[1];
      
      return {
        ...state,
        isFetching: false,
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
    
    case types.SIGNUP_START:
      return {
        ...state,
        isFetching: true
      };

    case types.SIGNUP_SUCCESS:
      const signupData = action.signedUpUser.data;
      
      return {
        ...state,
        isFetching: false,
        loggedIn: true,
        loggedInUser: signupData,
        signedUpUser: signupData
      };
    
    case types.SIGNUP_ERROR:
      signupError = action.signupError;
      return {
        ...state,
        isFetching: false,
        loggedIn: false,
        hasError: true,
        loggedInUser: {},
        signedUpUser: {},
        errorMessage: signupError
      };

    case types.LOGIN_GETCSRF_TOKEN_START:
      return {
        ...state,
        isFetching: true
      };

    case types.LOGIN_GETCSRF_TOKEN_SUCCESS:
      csrfToken = action.csrfTokenData.data.csrfToken;
      
      return {
        ...state,
        csrfToken,
        isFetching: false,
      };
    
    case types.LOGIN_GETCSRF_TOKEN_ERROR:
      const csrfTokenError = action.csrfTokenError;
      return {
        ...initialState,
        errorMessage: csrfTokenError
      };

    case types.UPDATE_FIRST_OR_LASTNAME_START:
      return {
        ...state,
        isUpdatingFOrLName: true
      };

    case types.UPDATE_FIRST_OR_LASTNAME_SUCCESS:
      updateFOrLNameData = action.updateFOrLNameData.data;
      
      return {
        ...state,
        loggedInUser: {
          ...state.loggedInUser,
          user: {
            ...state.loggedInUser.user,
            first_name: updateFOrLNameData.first_name,
            last_name: updateFOrLNameData.last_name
          }
        },
        userDetails: {
          ...state.userDetails,
          first_name: updateFOrLNameData.first_name,
          last_name: updateFOrLNameData.last_name
        },
        isUpdatingFOrLName: false,
      };
    
    case types.UPDATE_FIRST_OR_LASTNAME_ERROR:
      const updateFOrLNameError = action.updateFOrLNameError;
      return {
        ...initialState,
        errorMessage: updateFOrLNameError
      };
    
    default:
      return state;
  }
}
