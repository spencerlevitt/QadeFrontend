import * as types from '../actions/actionTypes';
import * as gameRequestsApi from '../../api/gameRequestsApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';

export function loadPendingGameRequestsStart() {
  return { type: types.LOAD_PENDING_GAME_REQUESTS_START };
}

export function loadPendingGameRequestsSuccess(pendingGameRequests) {
  return { type: types.LOAD_PENDING_GAME_REQUESTS_SUCCESS, pendingGameRequests };
}

export function loadPendingGameRequestsError(loadPendingGameRequestsError) {
  return { type: types.LOAD_PENDING_GAME_REQUESTS_ERROR, loadPendingGameRequestsError };
}

export function loadPendingGameRequests(userId, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(loadPendingGameRequestsStart());
    return gameRequestsApi
      .getPendingGameRequests(csrfToken)
      .then(pendingGameRequests => {
        if (pendingGameRequests.status !== HttpStatus.OK) {
          const error = new Error(pendingGameRequests.statusMessage);
          dispatch(apiCallError(error));
          dispatch(loadPendingGameRequestsError(error));
        }

        // attach the loggedIn user_id to ID sender/receiver
        pendingGameRequests.loggedInUserId = userId;
        return dispatch(loadPendingGameRequestsSuccess(pendingGameRequests));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(loadPendingGameRequestsError(error));
        throw error;
      });
  }
}

export function submitGameRequestStart() {
  return { type: types.SUBMIT_GAME_REQUEST_START };
}

export function submitGameRequestSuccess(submittedGameRequest) {
  return { type: types.SUBMIT_GAME_REQUEST_SUCCESS, submittedGameRequest };
}

export function submitGameRequestError(submitGameRequestError) {
  return { type: types.SUBMIT_GAME_REQUEST_ERROR, submitGameRequestError };
}

export function submitGameRequest(csrfToken, payload) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(submitGameRequestStart());
    return gameRequestsApi
      .submitGameRequest(csrfToken, payload)
      .then(submittedGameRequest => {
        if (submittedGameRequest.status !== HttpStatus.OK) {
          const error = new Error(submittedGameRequest.statusMessage);
          dispatch(apiCallError(error));
          dispatch(submitGameRequestError(error));
        }

        // attach the loggedIn user_id to ID sender/receiver
        submittedGameRequest.loggedInUserId = payload.sender_id;
        return dispatch(submitGameRequestSuccess(submittedGameRequest));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(submitGameRequestError(error));
        throw error;
      });
  }
}

export function loadAcceptedGameRequestsStart() {
  return { type: types.LOAD_ACCEPTED_GAME_REQUESTS_START };
}

export function loadAcceptedGameRequestsSuccess(acceptedGameRequests) {
  return { type: types.LOAD_ACCEPTED_GAME_REQUESTS_SUCCESS, acceptedGameRequests };
}

export function loadAcceptedGameRequestsError(loadAcceptedGameRequestsError) {
  return { type: types.LOAD_ACCEPTED_GAME_REQUESTS_ERROR, loadAcceptedGameRequestsError };
}

export function loadAcceptedGameRequests(userId, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(loadAcceptedGameRequestsStart());
    return gameRequestsApi
      .getAcceptedGameRequests (csrfToken)
      .then(acceptedGameRequests => {
        if (acceptedGameRequests.status !== HttpStatus.OK) {
          const error = new Error(acceptedGameRequests.statusMessage);
          dispatch(apiCallError(error));
          dispatch(loadAcceptedGameRequestsError(error));
        }

        // attach the loggedIn user_id to ID sender/receiver
        acceptedGameRequests.loggedInUserId = userId;
        return dispatch(loadAcceptedGameRequestsSuccess(acceptedGameRequests));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(loadAcceptedGameRequestsError(error));
        throw error;
      });
  }
}

export function acceptGameRequestStart() {
  return { type: types.ACCEPT_GAME_REQUEST_START };
}

export function acceptGameRequestSuccess(acceptedGameRequest) {
  return { type: types.ACCEPT_GAME_REQUEST_SUCCESS, acceptedGameRequest };
}

export function acceptGameRequestError(acceptGameRequestError) {
  return { type: types.ACCEPT_GAME_REQUEST_ERROR, acceptGameRequestError };
}

export function acceptGameRequest(requestId, location, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(acceptGameRequestStart());
    return gameRequestsApi
      .acceptGameRequest(requestId, location, csrfToken)
      .then(acceptedGameRequest => {
        if (acceptedGameRequest.status !== HttpStatus.OK) {
          const error = new Error(acceptedGameRequest.statusMessage);
          dispatch(apiCallError(error));
          dispatch(acceptGameRequestError(error));
        }

        return dispatch(acceptGameRequestSuccess(acceptedGameRequest));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(acceptGameRequestError(error));
        throw error;
      });
  }
}

export function rejectGameRequestStart() {
  return { type: types.REJECT_GAME_REQUEST_START };
}

export function rejectGameRequestSuccess(rejectedGameRequest) {
  return { type: types.REJECT_GAME_REQUEST_SUCCESS, rejectedGameRequest };
}

export function rejectGameRequestError(rejectGameRequestError) {
  return { type: types.REJECT_GAME_REQUEST_ERROR, rejectGameRequestError };
}

export function rejectGameRequest(requestId, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(rejectGameRequestStart());
    return gameRequestsApi
      .rejectGameRequest(requestId, csrfToken)
      .then(rejectedGameRequest => {
        if (rejectedGameRequest.status !== HttpStatus.OK) {
          const error = new Error(rejectedGameRequest.statusMessage);
          dispatch(apiCallError(error));
          dispatch(rejectGameRequestError(error));
        }

        return dispatch(rejectGameRequestSuccess(rejectedGameRequest));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(rejectGameRequestError(error));
        throw error;
      });
  }
}

export function submitGameCardStart() {
  return { type: types.SUBMIT_GAME_CARD_START };
}

export function submitGameCardSuccess(submittedGameCard) {
  return { type: types.SUBMIT_GAME_CARD_SUCCESS, submittedGameCard };
}

export function submitGameCardError(submitGameCardError) {
  return { type: types.SUBMIT_GAME_CARD_ERROR, submitGameCardError };
}

export function submitGameCard(requestId, csrfToken, payload) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(submitGameCardStart());
    return gameRequestsApi
      .submitGameCard(requestId, csrfToken, payload)
      .then(submittedGameCard => {
        if (submittedGameCard.status !== HttpStatus.OK) {
          const error = new Error(submittedGameCard.statusMessage);
          dispatch(apiCallError(error));
          dispatch(submitGameCardError(error));
        }

        return dispatch(submitGameCardSuccess(submittedGameCard));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(submitGameCardError(error));
        throw error;
      });
  }
}