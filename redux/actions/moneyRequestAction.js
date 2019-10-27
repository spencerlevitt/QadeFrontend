import * as types from '../actions/actionTypes';
import * as moneyRequestApi from '../../api/moneyRequestApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";
import HttpStatus from 'http-status-codes';

export function submitMoneyRequestStart() {
  return { type: types.SUBMIT_MONEY_REQUEST_START };
}

export function submitMoneyRequestSuccess(moneyRequest) {
  return { type: types.SUBMIT_MONEY_REQUEST_SUCCESS, moneyRequest };
}

export function submitMoneyRequestError(moneyRequestError) {
  return { type: types.SUBMIT_MONEY_REQUEST_ERROR, moneyRequestError };
}

export function submitMoneyRequest(csrfToken, payload) {
  return function (dispatch) {
    dispatch(beginApiCall());
    dispatch(submitMoneyRequestStart());
    return moneyRequestApi
      .submitMoneyRequest(csrfToken, payload)
      .then(moneyRequest => {
        if (moneyRequest.status !== HttpStatus.OK) {
          const error = new Error(moneyRequest.statusMessage);
          dispatch(apiCallError(error));
          dispatch(submitMoneyRequestError(error));
        }

        return dispatch(submitMoneyRequestSuccess(moneyRequest));
      }).catch(error => {
        dispatch(apiCallError(error));
        dispatch(submitMoneyRequestError(error));
        throw error;
      });
  }
}