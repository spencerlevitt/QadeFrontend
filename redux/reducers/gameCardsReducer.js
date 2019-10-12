import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gameCardsReducer(state = initialState.gameCards, action) {
  switch (action.type) {
    case types.SUBMIT_GAME_CARD_START:
      return {
        ...state,
        isSubmittingGameCards: true,
      };

    case types.SUBMIT_GAME_CARD_SUCCESS:
      return {
        ...state,
        // gameCard,
        isSubmittingGameCards: false
      };

    case types.SUBMIT_GAME_CARD_ERROR:
      const { submitGameCardError } = action;
      return {
        ...state,
        isSubmittingGameCards: false,
        hasError: true,
        errorMessage: submitGameCardError
      };

    default:
      return state;
  }
}
