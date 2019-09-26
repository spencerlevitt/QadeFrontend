import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function standingsReducer(state = initialState.standings, action) {
  switch (action.type) {
    case types.LOAD_STANDINGS_SUCCESS:
      return action.standings[0];
    default:
      return state;
  }
}
