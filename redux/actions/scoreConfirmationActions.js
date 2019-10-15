import * as types from '../actions/actionTypes';
import * as scoreConfirmationApi from '../../api/scoreConfirmationApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';

export function loadScoreConfirmationStart() {
  return { type: types.LOAD_SCORE_CONFIRMATION_START };
}

export function loadScoreConfirmationSuccess(scoreConfirmations) {
  return { type: types.LOAD_SCORE_CONFIRMATION_SUCCESS, scoreConfirmations };
}

export function loadScoreConfirmationError(loadScoreConfirmationError) {
  return { type: types.LOAD_SCORE_CONFIRMATION_ERROR, loadScoreConfirmationError };
}

export function loadScoreConfirmations(userId, userEmail, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(loadScoreConfirmationStart());
    return scoreConfirmationApi
      .getScoreConfirmations(userId, csrfToken)
      .then(scoreConfirmations => {
        if (scoreConfirmations.status !== HttpStatus.OK) {
          const error = new Error(scoreConfirmations.statusMessage);
          dispatch(apiCallError(error));
          dispatch(loadScoreConfirmationError(error));
        }

        // attach the loggedIn email to ID sender/receiver
        scoreConfirmations.loggedInUserEmail = userEmail;
        return dispatch(loadScoreConfirmationSuccess(scoreConfirmations));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(loadScoreConfirmationError(error));
        throw error;
      });
  }
}