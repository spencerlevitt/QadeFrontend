import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.userDetails, action) {
  switch (action.type) {
    case types.LOAD_USER_DETAILS_START:
      return {
        ...state,
        isFetching: true
      };

    case types.LOAD_USER_DETAILS_SUCCESS:
      return action.userDetails.data[0];
    
    case types.LOAD_USER_DETAILS_ERROR:
      const { loadUserDetailsError } = action;
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: loadUserDetailsError
      };

    case types.UPDATE_PROFILE_START:
      return {
        ...state,
        isUpdatingProfile: true
      };

    case types.UPDATE_PROFILE_SUCCESS:
      const updatedProfile = action.updatedProfile.data

      return {
        ...state,
        profile: {
          ...state.profile,
          bio: updatedProfile.bio,
          console: updatedProfile.console,
          photo_url: updatedProfile.photo_url,
        },
        isUpdatingProfile: false,
      }
    
    case types.UPDATE_PROFILE_ERROR:
      const { updateProfileError } = action;
      return {
        ...state,
        isUpdatingProfile: false,
        hasError: true,
        errorMessage: updateProfileError
      };

    default:
      return state;
  }
}
