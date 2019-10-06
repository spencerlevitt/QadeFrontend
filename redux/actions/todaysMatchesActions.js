import * as types from '../actions/actionTypes';
import * as todaysMatchesApi from '../../api/todaysMatchesApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';

export function loadTodaysMatchesStart() {
  return { type: types.LOAD_TODAYS_MATCHES_START };
}

export function loadTodaysMatchesSuccess(todaysMatches) {
  return { type: types.LOAD_TODAYS_MATCHES_SUCCESS, todaysMatches };
}

export function loadTodaysMatchesError(loadTodaysMatchesError) {
  return { type: types.LOAD_TODAYS_MATCHES_ERROR, loadTodaysMatchesError };
}

export function loadTodaysMatches(userId, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(loadTodaysMatchesStart());
    return todaysMatchesApi
      .getTodaysMatches(csrfToken)
      .then(todaysMatches => {
        if (todaysMatches.status !== HttpStatus.OK) {
          const error = new Error(todaysMatches.statusMessage);
          dispatch(apiCallError(error));
          dispatch(loadTodaysMatchesError(error));
        }

        // attach the loggedIn user_id to ID sender/receiver
        todaysMatches.loggedInUserId = userId;
        return dispatch(loadTodaysMatchesSuccess(todaysMatches));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(loadTodaysMatchesError(error));
        throw error;
      });
  }
}