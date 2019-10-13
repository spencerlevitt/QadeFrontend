import { combineReducers } from "redux";
import auth from './authReducer';
import userDetails from './userReducer';
import stats from './statsReducer';
import standings from './standingsReducer';
import todaysMatches from './todaysMatchesReducer';
import gameRequests from './gameRequestsReducer';
import gameCards from './gameCardsReducer';
import chartsData from './chartsReducer';
import friendRequests from './friendRequestsReducer';
import friends from './friendsReducer';
import apiCallsInProgress from './apiStatusReducer';
import { toastReducer as toast } from 'react-native-redux-toast';

const rootReducer = combineReducers({
  apiCallsInProgress,
  auth,
  chartsData,
  friendRequests,
  friends,
  gameCards,
  gameRequests,
  stats,
  standings,
  toast,
  todaysMatches,
  userDetails
});

export default rootReducer;