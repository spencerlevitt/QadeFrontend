import * as types from '../actions/actionTypes';
import * as finishedGamesApi from '../../api/finishedGamesApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';

export function loadScoreConfirmationsStart() {
  return { type: types.LOAD_SCORE_CONFIRMATION_START };
}

export function loadScoreConfirmationsSuccess(scoreConfirmations) {
  return { type: types.LOAD_SCORE_CONFIRMATION_SUCCESS, scoreConfirmations };
}

export function loadScoreConfirmationsError(loadScoreConfirmationsError) {
  return { type: types.LOAD_SCORE_CONFIRMATION_ERROR, loadScoreConfirmationsError };
}

export function loadScoreConfirmations(userId, userEmail, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(loadScoreConfirmationsStart());
    return finishedGamesApi
      .getScoreConfirmations(userId, csrfToken)
      .then(scoreConfirmations => {
        if (scoreConfirmations.status !== HttpStatus.OK) {
          const error = new Error(scoreConfirmations.statusMessage);
          dispatch(apiCallError(error));
          dispatch(loadScoreConfirmationsError(error));
        }

        // attach the loggedIn email to ID sender/receiver
        scoreConfirmations.loggedInUserId = userId;
        scoreConfirmations.loggedInUserEmail = userEmail;
        return dispatch(loadScoreConfirmationsSuccess(scoreConfirmations));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(loadScoreConfirmationsError(error));
        throw error;
      });
  }
}


export function acceptScoreConfirmationsStart() {
  return { type: types.ACCEPT_SCORE_CONFIRMATION_START };
}

export function acceptScoreConfirmationsSuccess(acceptedScore) {
  return { type: types.ACCEPT_SCORE_CONFIRMATION_SUCCESS, acceptedScore };
}

export function acceptScoreConfirmationsError(acceptScoreError) {
  return { type: types.ACCEPT_SCORE_CONFIRMATION_ERROR, acceptScoreError };
}

export function acceptScoreConfirmation(gameId, userEmail, payload, csrfToken) {
   console.log('****');
   console.log(gameId);
   console.log(payload);
   console.log(csrfToken);
   console.log('****');

  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(acceptScoreConfirmationsStart());
    return finishedGamesApi
      .acceptScoreConfirmation(gameId, payload, csrfToken)
      .then(acceptedScore => {
        if (acceptedScore.status !== HttpStatus.OK) {
          const error = new Error(acceptedScore.statusMessage);
          dispatch(apiCallError(error));
          dispatch(acceptScoreConfirmationsError(error));
        }

        // attach the loggedIn email to ID sender/receiver
        acceptedScore.loggedInUserEmail = userEmail;
        return dispatch(acceptScoreConfirmationsSuccess(acceptedScore));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(acceptScoreConfirmationsError(error));
        throw error;
      });
  }
}