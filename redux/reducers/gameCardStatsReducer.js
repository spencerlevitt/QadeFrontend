import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function statsReducer(state = initialState.gameCardStats, action) {
  switch (action.type) {
    case types.LOAD_GAME_CARD_STATS_START:
      return {
        ...state,
        isFetchingStats: true
      };

    case types.LOAD_GAME_CARD_STATS_SUCCESS:
      return {
        ...state,
        stats: {
          ...action.stats.data,
        },
        isFetchingStats: false
      };
    
    case types.LOAD_GAME_CARD_STATS_ERROR:
      const { gameCardStatsError } = action;
      return {
        ...state,
        isFetchingStats: false,
        hasError: true,
        errorMessage: gameCardStatsError
      };

    default:
      return state;
  }
}
