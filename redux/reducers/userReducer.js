import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOAD_USERWITHBALANCE_SUCCESS:
      return action.userWithBalance;
    default:
      return state;
  }
}
