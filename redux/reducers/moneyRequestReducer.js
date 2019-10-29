import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function moneyRequestReducer(state = initialState.moneyRequest, action) {
  switch (action.type) {
    case types.SUBMIT_MONEY_REQUEST_START:
      return {
        ...state,
        isSubmittingMoneyRequest: true,
      };

    case types.SUBMIT_MONEY_REQUEST_SUCCESS:
      const requests = action.moneyRequest.data;

      return {
        ...state,
        requests,
        isSubmittingMoneyRequest: false
      };

    case types.SUBMIT_MONEY_REQUEST_ERROR:
      const { disputeScoreError } = action;
      return {
        ...state,
        isSubmittingMoneyRequest: false,
        hasError: true,
        errorMessage: disputeScoreError
      };
    
    default:
        return state;
  }
}
  