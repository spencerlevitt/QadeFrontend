import * as types from '../actions/actionTypes';
import * as finishedGamesApi from '../../api/finishedGamesApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';

export function loadFinishedGamesStart() {
  return { type: types.LOAD_FINISHED_GAMES_START };
}

export function loadFinishedGamesSuccess(finishedGames) {
  return { type: types.LOAD_FINISHED_GAMES_SUCCESS, finishedGames };
}

export function loadFinishedGamesError(loadFinishedGamesError) {
  return { type: types.LOAD_FINISHED_GAMES_ERROR, loadFinishedGamesError };
}

export function loadFinishedGames(userId, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(loadFinishedGamesStart());
    return finishedGamesApi
      .getFinishedGames(userId, csrfToken)
      .then(finishedGames => {
        if (finishedGames.status !== HttpStatus.OK) {
          const error = new Error(finishedGames.statusMessage);
          dispatch(apiCallError(error));
          dispatch(loadFinishedGamesError(error));
        }

        return dispatch(loadFinishedGamesSuccess(finishedGames));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(loadFinishedGamesError(error));
        throw error;
      });
  }
}
