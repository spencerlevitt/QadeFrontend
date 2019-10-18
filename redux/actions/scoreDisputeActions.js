import * as types from '../actions/actionTypes';
import * as disputesApi from '../../api/disputesApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';

export function disputeScoreConfirmationStart() {
  return { type: types.DISPUTE_SCORE_CONFIRMATION_START };
}

export function disputeScoreConfirmationSuccess(disputedScore) {
  return { type: types.DISPUTE_SCORE_CONFIRMATION_SUCCESS, disputedScore };
}

export function disputeScoreConfirmationError(disputeScoreError) {
  return { type: types.DISPUTE_SCORE_CONFIRMATION_ERROR, disputeScoreError };
}

export function disputeScoreConfirmation(payload, userEmail, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(disputeScoreConfirmationStart());
    return disputesApi
      .submitDispute(csrfToken, payload)
      .then(disputedScore => {
        if (disputedScore.status !== HttpStatus.OK) {
          const error = new Error(disputedScore.statusMessage);
          dispatch(apiCallError(error));
          dispatch(disputeScoreConfirmationError(error));
        }

        // attach the loggedIn email to ID sender/receiver
        disputedScore.loggedInUserEmail = userEmail;
        return dispatch(disputeScoreConfirmationSuccess(disputedScore));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(disputeScoreConfirmationError(error));
        throw error;
      });
  }
}