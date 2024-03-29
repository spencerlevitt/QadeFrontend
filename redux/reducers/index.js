import { combineReducers } from "redux";
import auth from './authReducer';
import userDetails from './userReducer';
import gameCardStats from './gameCardStatsReducer';
import standings from './standingsReducer';
import todaysMatches from './todaysMatchesReducer';
import gameRequests from './gameRequestsReducer';
import moneyRequest from './moneyRequestReducer';
import chartsData from './chartsReducer';
import friendRequests from './friendRequestsReducer';
import friends from './friendsReducer';
import scoreConfirmation from './scoreConfirmationReducer';
import apiCallsInProgress from './apiStatusReducer';
import { toastReducer as toast } from 'react-native-redux-toast';

const rootReducer = combineReducers({
  apiCallsInProgress,
  auth,
  chartsData,
  friendRequests,
  friends,
  gameRequests,
  moneyRequest,
  scoreConfirmation,
  gameCardStats,
  standings,
  toast,
  todaysMatches,
  userDetails
});

export default rootReducer;