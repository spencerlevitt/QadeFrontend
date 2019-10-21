import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function disputeScoreConfirmationReducer(state = initialState.scoreConfirmation, action) {
  switch (action.type) {
    case types.DISPUTE_SCORE_CONFIRMATION_START:
      return {
        ...state,
        isSubmittingScoreDispute: true,
      };

    case types.DISPUTE_SCORE_CONFIRMATION_SUCCESS:
      const scoreDisputes = action.disputedScore;

      return {
        ...state,
        scoreDisputes,
        isSubmittingScoreDispute: false
      };

    case types.DISPUTE_SCORE_CONFIRMATION_ERROR:
      const { disputeScoreError } = action;
      return {
        ...state,
        isSubmittingScoreDispute: false,
        hasError: true,
        errorMessage: disputeScoreError
      };
    
    default:
        return state;
  }
}
  