import { FETCH_GAMERS, FETCH_GAMERS_ERROR,
     FETCH_RECENT_GAMERS, FETCH_RECENT_GAMERS_ERROR,
     SEND_FRIEND_REQUEST, REFRESH_RECENT_GAMERS, MY_MATCHES
     } from '../actions/actionTypes';

const initialState = {
    recentGamers: [],
    gamers: [],
    error: null,
    fetchRecentGamersErr: null,
    is_next_gamer: null,
  };

export function gamersReducer(state=initialState, action) {
    switch (action.type) {
        case MY_MATCHES: 
            return {
                ...state,
                myMatches: action.payload,
                error: null
            }
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
                recentGamers: [...action.payload.results],
                fetchRecentGamersErr: null,
                is_next_gamer: action.payload.next
            }
        case REFRESH_RECENT_GAMERS:
            return {
                ...state,
                //recentGamers: action.payload.results,
                fetchRecentGamersErr: null,
                is_next_gamer: action.payload.next
            }
        case FETCH_RECENT_GAMERS_ERROR:
            return {
                ...state,
                fetchRecentGamersErr: action.payload
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
