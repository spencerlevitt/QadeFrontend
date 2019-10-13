import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function friendsReducer(state = initialState.friendRequests, action) {
  switch (action.type) {
    case types.SEARCH_FRIENDS_START:
      return {
        ...state,
        isFetchingSearchedFriends: true,
      };

    case types.SEARCH_FRIENDS_SUCCESS:
      // Extract only the needed info for friend
      // requests screen
      const searchedFriends = action.searchedFriends.data.map(friend => {
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
        searchedFriends,
        isFetchingSearchedFriends: false
      };

    case types.SEARCH_FRIENDS_ERROR:
      const { searchedFriendsError } = action;
      return {
        ...state,
        isFetchingSearchedFriends: false,
        hasError: true,
        errorMessage: searchedFriendsError
      };

    default:
      return state;
  }
}
