import * as types from '../actions/actionTypes';
import * as standingsApi from '../../api/standingsApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';

export function loadStandingsStart() {
  return { type: types.LOAD_STANDINGS_START };
}

export function loadStandingsSuccess(standings) {
  return { type: types.LOAD_STANDINGS_SUCCESS, standings };
}

export function loadStandingsError(loadStandingsError) {
  return { type: types.LOAD_STANDINGS_ERROR, loadStandingsError };
}

export function loadStandings(csrfToken, userID) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(loadStandingsStart());
    const games = ['nba', 'fifa', 'madden', 'nhl'];
    const standings = games.map(game => {
      standingsApi
        .getStandings(game, csrfToken, userID)
        .then(standings => {
          if (standings.status !== HttpStatus.OK) {
            const error = new Error(standings.statusMessage);
            dispatch(apiCallError(error));
            dispatch(loadStandingsError(error));
          }

          return dispatch(loadStandingsSuccess(standings));
        }).catch(error => {
          dispatch(apiCallError(error));
          dispatch(loadStandingsError(error));
          throw error;
        })
    });
    return standings;
  }
}