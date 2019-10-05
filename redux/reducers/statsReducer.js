import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function statsReducer(state = initialState.stats, action) {
  switch (action.type) {
    case types.LOAD_STATS_SUCCESS:
      return action.stats[0];
    default:
      return state;
  }
}
