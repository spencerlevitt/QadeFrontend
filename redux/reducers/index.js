import { combineReducers } from "redux";
import auth from './authReducer';
import user from './userReducer';
import stats from './statsReducer';
import standings from './standingsReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  auth,
  user,
  stats,
  standings,
  apiCallsInProgress
});

export default rootReducer;