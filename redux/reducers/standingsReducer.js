import * as types from '../actions/actionTypes';
import initialState from './initialState';
import * as _ from 'lodash'

export default function standingsReducer(state = initialState.standings, action) {
  switch (action.type) {
    case types.LOAD_STANDINGS_START:
      return {
        ...state,
        isFetchingStandings: true,
      };

    case types.LOAD_STANDINGS_SUCCESS:
      const standings = _.orderBy(action.standings.data, ['rating'], ['desc']);
      
      return {
        ...state,
        nba: action.standings.game === 'nba' ? standings : state.nba,
        fifa: action.standings.game === 'fifa' ? standings : state.fifa,
        madden: action.standings.game === 'madden' ? standings : state.madden,
        nhl: action.standings.game === 'nhl' ? standings : state.nhl,
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
