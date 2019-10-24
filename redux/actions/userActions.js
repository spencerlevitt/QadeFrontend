import * as types from '../actions/actionTypes';
import * as userApi from '../../api/userApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';

export function loadUserDetailsStart() {
  return { type: types.LOAD_USER_DETAILS_START };
}

export function loadUserDetailsSuccess(userDetails) {
  return { type: types.LOAD_USER_DETAILS_SUCCESS, userDetails };
}

export function loadUserDetailsError(loadUserDetailsError) {
  return { type: types.LOAD_USER_DETAILS_ERROR, loadUserDetailsError };
}

export function loadUserDetails(csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(loadUserDetailsStart());
    return userApi.getUserDetails(csrfToken)
      .then(userDetails => {
        if (userDetails.status !== HttpStatus.OK) {
          const error = new Error(userDetails.statusMessage);
          dispatch(apiCallError(error));
          dispatch(loadUserDetailsError(error));
        }

        return dispatch(loadUserDetailsSuccess(userDetails))
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        dispatch(loadUserDetailsError(error));
        throw error;
      });
  }
}


export function updateProfileStart() {
  return { type: types.UPDATE_PROFILE_START };
}

export function updateProfileSuccess(updatedProfile) {
  return { type: types.UPDATE_PROFILE_SUCCESS, updatedProfile };
}

export function updateProfileError(updateProfileError) {
  return { type: types.UPDATE_PROFILE_ERROR, updateProfileError };
}

export function updateProfile(profileId, payload, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(updateProfileStart());
    return userApi.updateProfile(profileId, payload, csrfToken)
      .then(updatedProfile => {
        if (updatedProfile.status !== HttpStatus.OK) {
          const error = new Error(updatedProfile.statusMessage);
          dispatch(apiCallError(error));
          dispatch(updateProfileError(error));
        }

        return dispatch(updateProfileSuccess(updatedProfile))
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        dispatch(updateProfileError(error));
        throw error;
      });
  }
}
