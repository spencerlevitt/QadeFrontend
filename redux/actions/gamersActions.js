import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';
import { gamers } from '../../api/userApi';
import { getRecentGamesApi } from '../../api/gameRequestsApi';
import { FETCH_GAMERS, FETCH_GAMERS_ERROR, FETCH_RECENT_GAMERS, FETCH_RECENT_GAMERS_ERROR } from '../actions/actionTypes';

export function gamersSearch(payload) {
    return { type: FETCH_GAMERS, payload}
}

export function recentGamers(payload) {
    return { type: FETCH_RECENT_GAMERS, payload }
}

export function recentGamersError(payload) {
    return { type: FETCH_RECENT_GAMERS_ERROR, payload}
}

export function searchGamersError(payload) {
    return { type: FETCH_GAMERS_ERROR, payload}
}

export function getGamers(searchKey, csrfToken) {
    return function (dispatch) {
        dispatch(beginApiCall());
        return gamers(searchKey, csrfToken).then((data) => dispatch(gamersSearch(data.data)))
        .catch(error => dispatch(searchGamersError(error)))
    }
}

export function getRecentGames(csrfToken) {
    return function(dispatch) {
        dispatch(beginApiCall());
        return getRecentGamesApi(csrfToken).then( data=> dispatch(recentGamers(data.data.results)))
        .catch(error => dispatch(recentGamersError(error)))
    }
}