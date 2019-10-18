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
      // Extract only the needed info for score
      // confirmation screen
      const loggedInUserEmail = action.scoreConfirmations.loggedInUserEmail;
      const scoreDisputes = action.disputedScore;

      console.log('score disputes ', scoreDisputes);

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
  