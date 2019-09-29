import { combineReducers } from "redux";
import auth from './authReducer';
import userDetails from './userReducer';
import stats from './statsReducer';
import standings from './standingsReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  auth,
  userDetails,
  stats,
  standings,
  apiCallsInProgress
});

export default rootReducer;