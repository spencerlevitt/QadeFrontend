import * as types from '../actions/actionTypes';
import * as userApi from '../../api/userApi';
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadUserSuccess(userWithBalance) {
  return { type: types.LOAD_USERWITHBALANCE_SUCCESS, userWithBalance };
}

export function loadUser() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return userApi
      .getUserWithBalance()
      .then(userWithBalance => {
        dispatch(loadUserSuccess(userWithBalance));
      }).catch(error => {
        dispatch(apiCallError(error));
        throw error;
      })
  }
}