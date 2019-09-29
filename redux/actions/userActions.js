import * as types from '../actions/actionTypes';
import * as userApi from '../../api/userApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadUserSuccess(userDetails) {
  return { type: types.LOAD_USER_DETAILS_SUCCESS, userDetails };
}

export function loadUser() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return userApi.getUserDetails()
      .then(userDetails => dispatch(loadUserSuccess(userDetails)))
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });  
  }
}