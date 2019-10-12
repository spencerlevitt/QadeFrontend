import * as types from '../actions/actionTypes';
import * as gameCardsApi from '../../api/gameCardsApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';

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
    return gameCardsApi
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