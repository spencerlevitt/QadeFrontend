import * as types from '../actions/actionTypes';
import * as friendsApi from '../../api/friendsApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';

export function searchFriendsStart() {
  return { type: types.SEARCH_FRIENDS_START };
}

export function searchFriendsSuccess(searchedFriends) {
  return { type: types.SEARCH_FRIENDS_SUCCESS, searchedFriends };
}

export function searchFriendsError(searchFriendsError) {
  return { type: types.SEARCH_FRIENDS_ERROR, searchFriendsError };
}

export function searchFriends(csrfToken, query) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(searchFriendsStart());
    return friendsApi
      .searchFriends(csrfToken, query)
      .then(searchedFriends => {
        if (searchedFriends.status !== HttpStatus.OK) {
          const error = new Error(searchedFriends.statusMessage);
          dispatch(apiCallError(error));
          dispatch(searchFriendsError(error));
        }

        // attach the loggedIn email to ID sender/receiver
        return dispatch(searchFriendsSuccess(searchedFriends));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(searchFriendsError(error));
        throw error;
      });
  }
}
