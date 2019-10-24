import { FETCH_GAMERS, FETCH_GAMERS_ERROR,
     FETCH_RECENT_GAMERS, FETCH_RECENT_GAMERS_ERROR,
     SEND_FRIEND_REQUEST
     } from '../actions/actionTypes';

const initialState = {
    recentGamers: [],
    gamers: [],
    error: null,
    recentError: null,
  };

export function gamersReducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_GAMERS: 
            return {
                ...state,
                gamers: action.payload,
                error: null
            }
        case FETCH_GAMERS_ERROR: 
            return {
                ...state,
                error: action.payload
            }
        case FETCH_RECENT_GAMERS:
            return {
                ...state,
                recentGamers: action.payload,
                recentError: null
            }
        case FETCH_RECENT_GAMERS_ERROR:
            return {
                ...state,
                recentError: action.payload
            }
        case SEND_FRIEND_REQUEST:
            return {
                ...state,
                gamers: state.gamers.map(user => {
                    if(user.profile.id  === action.payload.profile.id) {
                        user.is_friend="outgoing";
                        return user
                    }
                    return user;
                } )
            }
        default:
            return state;
    }
}
