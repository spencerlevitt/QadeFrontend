import * as types from '../actions/actionTypes';
import * as userApi from '../../api/userApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';

export function loadUserSuccess(userDetails) {
  return { type: types.LOAD_USER_DETAILS_SUCCESS, userDetails };
}

export function loadUserDetails(csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return userApi.getUserDetails(csrfToken)
      .then(userDetails => {
        if (userDetails.status !== HttpStatus.OK) {
          const error = new Error(userDetails.statusMessage);
          dispatch(apiCallError(error));
        }

        return dispatch(loadUserSuccess(userDetails))
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  }
}