import * as types from '../actions/actionTypes';
import * as friendsApi from '../../api/friendsApi';
import * as friendRequestsApi from '../../api/friendRequestsApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';

export function loadFriendRequestsStart() {
  return { type: types.LOAD_FRIEND_REQUESTS_START };
}

export function loadFriendRequestsSuccess(friendRequests) {
  return { type: types.LOAD_FRIEND_REQUESTS_SUCCESS, friendRequests };
}

export function loadFriendRequestsError(loadFriendRequestsError) {
  return { type: types.LOAD_FRIEND_REQUESTS_ERROR, loadFriendRequestsError };
}

export function loadFriendRequests(userId, userEmail, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(loadFriendRequestsStart());
    return friendRequestsApi
      .getFriendRequests(userId, csrfToken)
      .then(friendRequests => {
        if (friendRequests.status !== HttpStatus.OK) {
          const error = new Error(friendRequests.statusMessage);
          dispatch(apiCallError(error));
          dispatch(loadFriendRequestsError(error));
        }

        // attach the loggedIn email to ID sender/receiver
        friendRequests.loggedInUserEmail = userEmail;
        return dispatch(loadFriendRequestsSuccess(friendRequests));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(loadFriendRequestsError(error));
        throw error;
      });
  }
}

export function loadAcceptedFriendsStart() {
  return { type: types.LOAD_ACCEPTED_FRIENDS_START };
}

export function loadAcceptedFriendsSuccess(acceptedFriends) {
  return { type: types.LOAD_ACCEPTED_FRIENDS_SUCCESS, acceptedFriends };
}

export function loadAcceptedFriendsError(loadAcceptedFriendsError) {
  return { type: types.LOAD_ACCEPTED_FRIENDS_ERROR, loadAcceptedFriendsError };
}

export function loadAcceptedFriends(csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(loadAcceptedFriendsStart());
    return friendsApi
      .getAcceptedFriends(csrfToken)
      .then(acceptedFriends => {
        if (acceptedFriends.status !== HttpStatus.OK) {
          const error = new Error(acceptedFriends.statusMessage);
          dispatch(apiCallError(error));
          dispatch(loadAcceptedFriendsError(error));
        }

        // attach the loggedIn email to ID sender/receiver
        return dispatch(loadAcceptedFriendsSuccess(acceptedFriends));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(loadAcceptedFriendsError(error));
        throw error;
      });
  }
}

export function acceptFriendRequestStart() {
  return { type: types.ACCEPT_FRIEND_REQUEST_START };
}

export function acceptFriendRequestSuccess(acceptedFriendRequest) {
  return { type: types.ACCEPT_FRIEND_REQUEST_SUCCESS, acceptedFriendRequest };
}

export function acceptFriendRequestError(acceptFriendRequestError) {
  return { type: types.ACCEPT_FRIEND_REQUEST_ERROR, acceptFriendRequestError };
}

export function acceptFriendRequest(requestId, status, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(acceptFriendRequestStart());
    return friendRequestsApi
      .updateFriendRequests(requestId, status, csrfToken)
      .then(acceptedFriendRequest => {
        if (acceptedFriendRequest.status !== HttpStatus.OK) {
          const error = new Error(acceptedFriendRequest.statusMessage);
          dispatch(apiCallError(error));
          dispatch(acceptFriendRequestError(error));
        }

        return dispatch(acceptFriendRequestSuccess(acceptedFriendRequest));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(acceptFriendRequestError(error));
        throw error;
      });
  }
}

export function rejectFriendRequestStart() {
  return { type: types.REJECT_FRIEND_REQUEST_START };
}

export function rejectFriendRequestSuccess(rejectedFriendRequest) {
  return { type: types.REJECT_FRIEND_REQUEST_SUCCESS, rejectedFriendRequest };
}

export function rejectFriendRequestError(rejectFriendRequestError) {
  return { type: types.REJECT_FRIEND_REQUEST_ERROR, rejectFriendRequestError };
}

export function rejectFriendRequest(requestId, status, csrfToken) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(rejectFriendRequestStart());
    return friendRequestsApi
      .updateFriendRequests(requestId, status, csrfToken)
      .then(rejectedFriendRequest => {
        if (rejectedFriendRequest.status !== HttpStatus.OK) {
          const error = new Error(rejectedFriendRequest.statusMessage);
          dispatch(apiCallError(error));
          dispatch(rejectFriendRequestError(error));
        }

        return dispatch(rejectFriendRequestSuccess(rejectedFriendRequest));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(acceptFriendRequestError(error));
        throw error;
      });
  }
}