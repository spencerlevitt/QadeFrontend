import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function standingsReducer(state = initialState.standings, action) {
  switch (action.type) {
    case types.LOAD_STANDINGS_START:
      return {
        ...state,
        isFetchingStandings: true,
      };

    case types.LOAD_STANDINGS_SUCCESS:
      return {
        ...state,
        nba: action.standings.game === 'nba' ? action.standings.data : state.nba,
        fifa: action.standings.game === 'fifa' ? action.standings.data : state.fifa,
        madden: action.standings.game === 'madden' ? action.standings.data : state.madden,
        nhl: action.standings.game === 'nhl' ? action.standings.data : state.nhl,
        isFetchingStandings: false,
      };
    
    case types.LOAD_STANDINGS_ERROR:
      const { loadStandingsError } = action;
      return {
        ...state,
        isFetchingStandings: false,
        hasError: true,
        errorMessage: loadStandingsError
      };
    
    default:
      return state;
  }
}
