import * as types from '../actions/actionTypes';
import * as statsApi from '../../api/statsApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadStatsSuccess(stats) {
  return { type: types.LOAD_STATS_SUCCESS, stats };
}

export function loadStats() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return statsApi
      .getStats()
      .then(stats => {
        dispatch(loadStatsSuccess(stats));
      }).catch(error => {
        dispatch(apiCallError(error));
        throw error;
      })
  }
}