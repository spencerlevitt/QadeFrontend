import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';
import { searchGamers } from '../../api/userApi';
import { getRecentGamesApi, getMyMatchesApi} from '../../api/gameRequestsApi';
import { MY_MATCHES, FETCH_GAMERS, FETCH_GAMERS_ERROR, FETCH_RECENT_GAMERS, FETCH_RECENT_GAMERS_ERROR, REFRESH_RECENT_GAMERS } from '../actions/actionTypes';

export function gamersSearch(payload) {
    return { type: FETCH_GAMERS, payload}
}

export function recentGamers(payload) {
    console.log(payload);
    return { type: FETCH_RECENT_GAMERS, payload }
}

export function myMatches(payload) {
    return { type: MY_MATCHES, payload }
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
        return searchGamers(searchKey, csrfToken).then( data => dispatch(gamersSearch(data.data)))
        .catch(error => dispatch(searchGamersError(error) && console.log(error)))
    }
}

export function getMyMatches(csrfToken, page, type, userID) {
   console.log('***** '+userID);
    return function(dispatch) {
        dispatch(beginApiCall());
        return getMyMatchesApi(csrfToken, page, userID).then( data=> {
            return dispatch(myMatches(data.data))
        })
        .catch(error => dispatch(recentGamersError(error)))
    }
}

export function getRecentGames(csrfToken, page, type, userID) {
    return function(dispatch) {
        dispatch(beginApiCall());
        return getRecentGamesApi(csrfToken, page,  userID).then( data=> {
           console.log('type  '+type);
            if(type) {
                return dispatch(refreshRecentGamers(data.data))
            }
            return dispatch(recentGamers(data.data))
        })
        .catch(error => dispatch(recentGamersError(error)))
    }
}