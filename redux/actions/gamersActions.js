import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';
import { gamers } from '../../api/userApi';
import { getRecentGamesApi } from '../../api/gameRequestsApi';
import { FETCH_GAMERS, FETCH_GAMERS_ERROR, FETCH_RECENT_GAMERS, FETCH_RECENT_GAMERS_ERROR, REFRESH_RECENT_GAMERS } from '../actions/actionTypes';

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

export function refreshRecentGamers(payload) {
    return {type: REFRESH_RECENT_GAMERS, payload}
}

export function getGamers(searchKey, csrfToken) {
    return function (dispatch) {
        dispatch(beginApiCall());
        return gamers(searchKey, csrfToken).then( data => dispatch(gamersSearch(data.data)))
        .catch(error => dispatch(searchGamersError(error) && console.log(error)))
    }
}

export function getRecentGames(csrfToken, page, type) {
    return function(dispatch) {
        console.log(page, "ACTION PAGE")
        dispatch(beginApiCall());
        return getRecentGamesApi(csrfToken, page).then( data=> {
            if(type) {
                return dispatch(refreshRecentGamers(data.data))
            }
            return dispatch(recentGamers(data.data))
        })
        .catch(error => dispatch(recentGamersError(error)))
    }
}