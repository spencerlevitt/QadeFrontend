import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function finishedGamesReducer(state = initialState.finishedGames, action) {
  switch (action.type) {
    case types.LOAD_FINISHED_GAMES_START:
      return {
        ...state,
        isFetchingFinishedGames: true,
      };

    case types.LOAD_FINISHED_GAMES_SUCCESS:
      const games = action.finishedGames.data;
      return {
        ...state,
        games,
        isFetchingFinishedGames: false
      };

    case types.LOAD_FINISHED_GAMES_ERROR:
      const { loadFinishedGamesError } = action;
      return {
        ...state,
        isFetchingFinishedGames: false,
        hasError: true,
        errorMessage: loadFinishedGamesError
      };
    
    default:
        return state;
  }
}
  