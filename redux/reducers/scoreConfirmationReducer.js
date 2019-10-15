import * as types from '../actions/actionTypes';
import initialState from './initialState';
import moment from 'moment';

export default function scoreConfirmationReducer(state = initialState.scoreConfirmation, action) {
  switch (action.type) {
    case types.LOAD_FRIEND_REQUESTS_START:
      return {
        ...state,
        isFetchingFriendRequests: true,
      };

    case types.LOAD_FRIEND_REQUESTS_SUCCESS:
      // Extract only the needed info for friend
      // requests screen
      const loggedInUserEmail = action.scoreConfirmation.loggedInUserEmail;
      const scoreConfirmation = action.scoreConfirmation.data.map(friendRequest => {
        const eventualFriendEmail = friendRequest.eventual_friend.email;
        const status = friendRequest.status;
        let urlArray = friendRequest.url.split('/');
        let id = urlArray[urlArray.length - 2];
        if (status === 0 && eventualFriendEmail === loggedInUserEmail) {
          return {
            id,
            first_name: friendRequest.user.first_name,
            last_name: friendRequest.user.last_name,
            photo_url: friendRequest.user.profile.photo_url,
            status
          }
        }

        return null;
      }).filter(friendRequest => friendRequest !== null);

      return {
        ...state,
        pendingFriends: scoreConfirmation,
        isFetchingFriendRequests: false
      };

    case types.LOAD_FRIEND_REQUESTS_ERROR:
      const { loadFriendRequestsError } = action;
      return {
        ...state,
        isFetchingFriendRequests: false,
        hasError: true,
        errorMessage: loadFriendRequestsError
      };