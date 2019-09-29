import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.userDetails, action) {
  switch (action.type) {
    case types.LOAD_USER_DETAILS_SUCCESS:
      return action.userDetails;
    default:
      return state;
  }
}
