import { combineReducers } from "redux";
import auth from './authReducer';
import userDetails from './userReducer';
import stats from './statsReducer';
import standings from './standingsReducer';
import todaysMatches from './todaysMatchesReducer';
import chartsData from './chartsReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  auth,
  chartsData,
  stats,
  standings,
  todaysMatches,
  userDetails
});

export default rootReducer;