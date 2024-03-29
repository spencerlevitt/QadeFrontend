import * as types from '../actions/actionTypes';
import initialState from './initialState';
import moment from 'moment';

export default function todaysMatchesReducer(state = initialState.todaysMatches, action) {
  switch (action.type) {
    case types.LOAD_TODAYS_MATCHES_START:
      return {
        ...state,
        isFetchingTodaysMatches: true,
      };

    case types.LOAD_TODAYS_MATCHES_SUCCESS:
      // Extract only the needed info for today's
      // matches: first_name, last_name, wager, game, 
      // win-loss record, win_percent, time_left (valid matches are < 24 hours)
      const loggedInUserId = action.todaysMatches.loggedInUserId;
      const matches = action.todaysMatches.data.map(match => {
        const senderId = match.sender.statistics.id;
        if(match.time_left_to_submit !== null) {
          const time_left =  parseInt(match.time_left_to_submit.split(" ")[0]);
          let urlArray = match.url.split('/');
          let id = urlArray[urlArray.length - 2];
          
          if (time_left > 0) {
            return {
              id,
              first_name: senderId === loggedInUserId ? match.receiver.first_name : match.sender.first_name,
              last_name: senderId === loggedInUserId ? match.receiver.last_name : match.sender.last_name,
              photo_url: senderId === loggedInUserId ? match.receiver.profile.photo_url : match.sender.profile.photo_url,
              won_games: senderId === loggedInUserId ? match.receiver.statistics.won_games : match.sender.statistics.won_games,
              lost_games: senderId === loggedInUserId ? match.receiver.statistics.lost_games : match.sender.statistics.lost_games,
              win_percent: senderId === loggedInUserId ? match.receiver.statistics.win_percent : match.sender.statistics.win_percent,
              wager: match.wager,
              game: match.game,
              time_left,
            }
          }
        }

        return null;
      }).filter(match => match !== null);

      return {
        ...state,
        matches,
        isFetchingTodaysMatches: false
      };

    case types.LOAD_TODAYS_MATCHES_ERROR:
      const { loadTodaysMatchesError } = action;
      return {
        ...state,
        isFetchingTodaysMatches: false,
        hasError: true,
        errorMessage: loadTodaysMatchesError
      };

    default:
      return state;
  }
}
