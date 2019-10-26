import * as types from './actionTypes';
import * as gameCardStatsApi from '../../api/gameCardStatsApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadGameCardStatsStart() {
  return { type: types.LOAD_GAME_CARD_STATS_START };
}

export function loadGameCardStatsSuccess(stats) {
  return { type: types.LOAD_GAME_CARD_STATS_SUCCESS, stats };
}

export function loadGameCardStatsError(gameCardStatsError) {
  return { type: types.LOAD_GAME_CARD_STATS_ERROR, gameCardStatsError };
}

export function loadGameCardStats(userId, gameCard, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(loadGameCardStatsStart());
    return gameCardStatsApi
      .getStatsWithOpponent(userId, gameCard, csrfToken)
      .then(stats => {
        if (stats.status !== HttpStatus.OK) {
          const error = new Error(stats.statusMessage);
          dispatch(apiCallError(error));
          dispatch(loadGameCardStatsError(error));
        }

        return dispatch(loadStatsSuccess(stats));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(loadGameCardStatsError(error));
        throw error;
      })
  }
}
