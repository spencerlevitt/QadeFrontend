import { combineReducers } from "redux";
import auth from './authReducer';
import userDetails from './userReducer';
import stats from './statsReducer';
import standings from './standingsReducer';
import chartsData from './chartsReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  auth,
  chartsData,
  stats,
  standings,
  userDetails
});

export default rootReducer;