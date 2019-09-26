import { combineReducers } from "redux";
import user from './userReducer';
import stats from './statsReducer';
import standings from './standingsReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  user,
  stats,
  standings,
  apiCallsInProgress
});

export default rootReducer;