import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function statsReducer(state = initialState.gameCardStats, action) {
  switch (action.type) {
    case types.LOAD_GAME_CARD_STATS_START:
      return action.stats[0];
    default:
      return state;
  }
}
