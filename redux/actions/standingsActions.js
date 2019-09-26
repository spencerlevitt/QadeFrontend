import * as types from '../actions/actionTypes';
import * as standingsApi from '../../api/standingsApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadStandingsSuccess(standings) {
  return { type: types.LOAD_STANDINGS_SUCCESS, standings };
}

export function loadStandings() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return standingsApi
      .getStandings()
      .then(standings => {
        dispatch(loadStandingsSuccess(standings));
      }).catch(error => {
        dispatch(apiCallError(error));
        throw error;
      })
  }
}