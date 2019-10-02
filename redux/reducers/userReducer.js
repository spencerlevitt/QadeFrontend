import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.userDetails, action) {
  switch (action.type) {
    case types.LOAD_USER_DETAILS_START:
      return {
        ...state,
        isFetching: true
      };

    case types.LOAD_USER_DETAILS_SUCCESS:
      return action.userDetails.data[0];
    
    case types.LOAD_USER_DETAILS_ERROR:
      const { loadUserDetailsError } = action;
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: loadUserDetailsError
      };

    default:
      return state;
  }
}
