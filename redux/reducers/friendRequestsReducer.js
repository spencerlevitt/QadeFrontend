import * as types from '../actions/actionTypes';
import initialState from './initialState';
import moment from 'moment';

export default function friendRequestsReducer(state = initialState.friendRequests, action) {
  switch (action.type) {
    case types.LOAD_FRIEND_REQUESTS_START:
      return {
        ...state,
        isFetchingFriendRequests: true,
      };

    case types.LOAD_FRIEND_REQUESTS_SUCCESS:
      // Extract only the needed info for friend
      // requests screen
      const loggedInUserEmail = action.friendRequests.loggedInUserEmail;
      const friendRequests = action.friendRequests.data.map(friendRequest => {
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
        pendingFriends: friendRequests,
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

    case types.LOAD_ACCEPTED_FRIENDS_START:
      return {
        ...state,
        isFetchingAcceptedFriends: true,
      };

    case types.LOAD_ACCEPTED_FRIENDS_SUCCESS:
      // Extract only the needed info for friend
      // requests screen
      const acceptedFriends = action.acceptedFriends.data.map(friend => {
        let urlArray = friend.url.split('/');
        let id = urlArray[urlArray.length - 2];
  
        return {
          id,
          first_name: friend.first_name,
          last_name: friend.last_name,
          photo_url: friend.profile.photo_url,
          win_percent: friend.statistics.win_percent,
          won_games: friend.statistics.won_games,
          lost_games: friend.statistics.lost_games,
        }
      });

      return {
        ...state,
        acceptedFriends,
        isFetchingAcceptedFriends: false
      };

    case types.LOAD_ACCEPTED_FRIENDS_ERROR:
      const { loadAcceptedFriendsError } = action;
      return {
        ...state,
        isFetchingAcceptedFriends: false,
        hasError: true,
        errorMessage: loadAcceptedFriendsError
      };

    case types.ACCEPT_FRIEND_REQUEST_START:
      return {
        ...state,
        isFetchingFriendRequests: true,
      };

    case types.ACCEPT_FRIEND_REQUEST_SUCCESS:
      let acceptedRequest = action.acceptedFriendRequest.data;
      urlArray = acceptedRequest.url.split('/');
      id = urlArray[urlArray.length - 2];

      let pendingFriends = state.pendingFriends.map(friendRequest => {
        if (friendRequest.id === id) {
          return null;
        } else {
          return friendRequest;
        }
      }).filter(friendRequest => friendRequest !== null);


      acceptedRequest = {
        id,
        first_name: acceptedRequest.user.first_name,
        last_name: acceptedRequest.user.last_name,
        photo_url: acceptedRequest.user.profile.photo_url,
        status: acceptedRequest.status,
        win_percent: acceptedRequest.statistics.win_percent,
        won_games: acceptedRequest.statistics.won_games,
        lost_games: acceptedRequest.statistics.lost_games,
      };

      return {
        ...state,
        pendingFriends,
        acceptedFriends: state.acceptedFriends.concat(acceptedRequest),
        isFetchingFriendRequests: false
      };

    case types.ACCEPT_FRIEND_REQUEST_ERROR:
      const { acceptFriendRequestError } = action;
      return {
        ...state,
        isFetchingFriendRequests: false,
        hasError: true,
        errorMessage: acceptFriendRequestError
      };

    case types.REJECT_FRIEND_REQUEST_START:
      return {
        ...state,
        isFetchingFriendRequests: true,
      };

    case types.REJECT_FRIEND_REQUEST_SUCCESS:
      let rejectedRequest = action.rejectedFriendRequest.data;
      urlArray = rejectedRequest.url.split('/');
      id = urlArray[urlArray.length - 2];

      pendingFriends = state.pendingFriends.map(friendRequest => {
        if (friendRequest.id === id) {
          return null;
        } else {
          return friendRequest;
        }
      }).filter(friendRequest => friendRequest !== null);

      rejectedRequest = {
        first_name: rejectedRequest.user.first_name,
        last_name: rejectedRequest.user.last_name,
        photo_url: rejectedRequest.user.profile.photo_url,
        status: rejectedRequest.status
      };

      return {
        ...state,
        pendingFriends,
        rejectedFriends: state.rejectedFriends.concat(rejectedRequest),
        isFetchingFriendRequests: false
      };

    case types.REJECT_FRIEND_REQUEST_ERROR:
      const { rejectFriendRequestError } = action;
      return {
        ...state,
        isFetchingFriendRequests: false,
        hasError: true,
        errorMessage: rejectFriendRequestError
      };

    default:
      return state;
  }
}
